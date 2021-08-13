from flask import Flask, jsonify, make_response, request
from flask_cors import CORS
import pandas as pd

df = pd.read_csv("fifa_data.csv")

app = Flask(__name__)
CORS(app)


@app.route("/nationality", methods=["GET"])
def get_nationality_list():
    number_of_player = df.rename(columns={"sofifa_id": "count"}).groupby(
        "nationality").count()["count"].to_json(orient='table')
    return make_response(jsonify(number_of_player), 200)


@app.route("/players", methods=["GET"])
def get_players():
    nationality = request.args.get("nationality")
    df_by_nation = df[(df.nationality == nationality)]
    return make_response(jsonify(df_by_nation.to_json(orient='records')), 200)


if __name__ == "__main__":
    # https://qiita.com/amuyikam/items/01a8c16e3ddbcc734a46 0.0.0.0にしておく
    app.run(host="0.0.0.0", debug=True)
