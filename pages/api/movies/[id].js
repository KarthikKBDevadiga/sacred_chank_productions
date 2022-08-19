import Constants from "../../../helpers/Constants";

export default function Movies(req, res) {
  if (req.method == "GET") {
    res
      .status(200)
      .json(Constants.MOVIES.find((movie) => movie.id == req.query.id));
  } else res.status(405).end();
}
