import dbConnect from "../../../util/dbConnect";

const handler = async (req, res) => {
  await dbConnect();
};

export default handler;
