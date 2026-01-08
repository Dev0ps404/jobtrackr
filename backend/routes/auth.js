const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

router.post("/google", async (req, res) => {
  try {
    const { token } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    // payload.email, payload.name
    // TODO: check user in DB or create new

    // 🔑 Generate your app's JWT
    const appToken = jwt.sign(
      {
        email: payload.email,
        name: payload.name,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token: appToken });
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: "Google authentication failed" });
  }
});
