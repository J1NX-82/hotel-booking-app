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

    await whook.verify(JSON.stringify(req.body), headers);

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {        
      const userData = {
        _id: data.id, // Clerk user id
        email: data.email_addresses[0].email_address,
        username:
          (data.first_name && data.last_name)
            ? `${data.first_name} ${data.last_name}`
            : data.email_addresses[0].email_address.split("@")[0], // fallback
        image: data.image_url,
        recentSearchedCities: [], // ensure it exists
      }
        await User.create(userData); // always create fresh user
        break;
      }

      case "user.updated": {
        
    const userData = {
        _id: data.id, // Clerk user id
        email: data.email_addresses[0].email_address,
        username:
          (data.first_name && data.last_name)
            ? `${data.first_name} ${data.last_name}`
            : data.email_addresses[0].email_address.split("@")[0], // fallback
        image: data.image_url,
        recentSearchedCities: [], // ensure it exists
      }
        await User.findByIdAndUpdate(data.id, userData, { new: true });
        break;
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        break;
      }

      default:
        break;
    }

    res.json({ success: true, message: "Webhook Received" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;
