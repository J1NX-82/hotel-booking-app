import { Webhook } from "svix";
import User from "../models/User.js";

const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    // Verify using raw buffer
    const payload = whook.verify(req.body, headers);
    const { data, type } = JSON.parse(req.body.toString("utf8"));

    const userData = {
      _id: data.id,
      email: data.email_addresses?.[0]?.email_address || "",
      username: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
      image: data.image_url || "",
      recentSearchedCities: [], // ensure default
    };

    switch (type) {
      case "user.created":
        await User.create(userData);
        break;
      case "user.updated":
        await User.findByIdAndUpdate(data.id, userData);
        break;
      case "user.deleted":
        await User.findByIdAndDelete(data.id);
        break;
    }

    res.json({ success: true, message: "Webhook received" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;
