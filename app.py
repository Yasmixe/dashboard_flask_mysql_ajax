from flask import Flask, render_template, request, redirect, jsonify
from flaskext.mysql import MySQL
import json

app = Flask(__name__)


app.config["MYSQL_DATABASE_HOST"] = "localhost"
app.config["MYSQL_DATABASE_PORT"] = 3306
app.config["MYSQL_DATABASE_USER"] = "root"
app.config["MYSQL_DATABASE_PASSWORD"] = "pass_root"
app.config["MYSQL_DATABASE_DB"] = "db_university"

mysql = MySQL()
mysql.init_app(app)


@app.route("/debut")
def page1():
    return render_template("page1.html")


@app.route("/")
def page2():
    return render_template("page2.html")


@app.route("/etudiant")
def page3():
    return render_template("etudiant.html")


@app.route("/api/data")
def doGetData():
    data2 = []

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT DISTINCT  annee FROM resultats")
    specialite_tuple = cursor.fetchall()
    h = [item[0] for item in specialite_tuple]
    for annee in h:
        cursor.execute(f"SELECT count(*)  from resultats where ANNEE={annee}")
        p = cursor.fetchall()
        p1 = [item[0] for item in p]
        p2 = p1[0]
        data2.append({"annee": annee, "data": p2})

    cursor.close()

    data_JSON = json.dumps(data2)
    return data_JSON


@app.route("/api/data3")
def doGetData3():
    data3 = {"annee": [], "datasets": []}

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT DISTINCT annee FROM resultats")

    annee_tuple = cursor.fetchall()
    annee_list = [item[0] for item in annee_tuple]
    data3["annee"] = annee_list

    cursor.execute("SELECT DISTINCT SEXE FROM resultats")

    SEXE_tuple = cursor.fetchall()
    SEXE_list = [item[0] for item in SEXE_tuple]

    for SEXE in SEXE_list:
        nombreetur_list1 = []
        for annee in annee_list:
            cursor.execute(
                "SELECT count(*) FROM resultats WHERE annee= "
                + str(annee)
                + " and SEXE='"
                + SEXE
                + "' and MOYENNE>=10"
            )
            nombreetur_tuple = cursor.fetchall()
            nombreetur_list = [item[0] for item in nombreetur_tuple]
            nombreetur_list2 = nombreetur_list[0]
            nombreetur_list1.append(nombreetur_list2)

        data3["datasets"].append({"label": SEXE, "data": nombreetur_list1})

    data_JSON3 = json.dumps(data3)
    return data_JSON3


@app.route("/api/data4")
def doGetData4():
    data4 = []

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT DISTINCT annee FROM resultats")
    annee_tuple = cursor.fetchall()
    annees = [item[0] for item in annee_tuple]

    for annee in annees:
        # Count of failed results for females
        cursor.execute(
            f"SELECT COUNT(*) FROM resultats WHERE ANNEE={annee} AND MOYENNE < 10 AND SEXE='F'"
        )
        count_females = cursor.fetchone()[0]

        # Count of failed results for males
        cursor.execute(
            f"SELECT COUNT(*) FROM resultats WHERE ANNEE={annee} AND MOYENNE < 10 AND SEXE='H'"
        )
        count_males = cursor.fetchone()[0]

        data4.append(
            {"annee": annee, "countFemales": count_females, "countMales": count_males}
        )

    cursor.close()

    return jsonify(data4)


@app.route("/api/data5")
def doGetData5():
    data5 = []
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT DISTINCT annee FROM resultats")
    annee_tuple = cursor.fetchall()
    annees = [item[0] for item in annee_tuple]

    for annee in annees:
        # Count of all results for females
        cursor.execute(
            f"SELECT COUNT(*) FROM resultats WHERE ANNEE={annee} AND SEXE='F'"
        )
        count_females = cursor.fetchone()[0]

        data5.append({"annee": annee, "countFemales": count_females})

    cursor.close()

    return jsonify(data5)


@app.route("/api/data6")
def doGetData6():
    data6 = []
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT DISTINCT annee FROM resultats")
    annee_tuple = cursor.fetchall()
    annees = [item[0] for item in annee_tuple]

    for annee in annees:
        # Your custom query for data6, for example, count of something else
        cursor.execute(
            f"SELECT COUNT(*) FROM resultats WHERE ANNEE={annee} AND SEXE='H'"
        )
        count_data6 = cursor.fetchone()[0]

        data6.append({"annee": annee, "countData6": count_data6})

    cursor.close()

    return jsonify(data6)


@app.route("/api/data7")
def doGetData7():
    data7 = []
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT MOYENNE FROM resultats WHERE ANNEE = '2019'")
    moyenne_data = cursor.fetchall()

    for row in moyenne_data:
        moyenne = row[0]
        data7.append({"moyenne": moyenne})

    cursor.close()

    return jsonify(data7)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
