/* eslint-disable import/no-anonymous-default-export */
import db from "@/lib/firebase";
import { withSentry } from "@sentry/nextjs";

export default withSentry(async (req: any, res: any) => {
  if (req.method === "POST") {
    const ref = db.ref("views").child(req.query.slug);
    const { snapshot } = await ref.transaction((currentViews) => {
      if (currentViews === null) {
        return 1;
      }

      return currentViews + 1;
    });

    return res.status(200).json({
      total: snapshot.val(),
    });
  }

  if (req.method === "GET") {
    const snapshot = await db.ref("views").child(req.query.slug).once("value");
    const views = snapshot.val();

    return res.status(200).json({ total: views });
  }
});
