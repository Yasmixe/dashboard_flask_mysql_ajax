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


@app.route("/")
def page1():
    return render_template("page1.html")


@app.route("/debut")
def page2():
    return render_template("page2.html")


@app.route("/etudiant")
def page3():
    return render_template("etudiant.html")


@app.route("/specialite")
def page4():
    return render_template("specialite.html")


@app.route("/data")
def page5():
    return render_template("data.html")


# page etudiant
# display nbr etudiants par annee
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


# display fourchette de moyenne
@app.route("/api/data3")
def doGetData3():
    data3 = {"annee": [], "datasets": []}

    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT DISTINCT annee FROM resultats")

    annee_tuple = cursor.fetchall()
    annee_list = [item[0] for item in annee_tuple]
    data3["annee"] = annee_list

    moyenne_ranges = [(0, 9), (10, 12), (13, 15), (16, 20)]  # Define moyenne ranges

    for annee in annee_list:
        range_counts = []
        for moyenne_range in moyenne_ranges:
            min_range, max_range = moyenne_range
            cursor.execute(
                f"SELECT COUNT(*) FROM resultats WHERE annee={annee} AND MOYENNE BETWEEN {min_range} AND {max_range}"
            )
            count_result = cursor.fetchall()
            count_value = [item[0] for item in count_result]
            range_counts.append(count_value[0])

        data3["datasets"].append({"label": str(annee), "data": range_counts})

    cursor.close()
    conn.close()

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
    cursor.execute(
        "SELECT MOYENNE FROM resultats WHERE ANNEE = '2019' AND MOYENNE>=15 AND MOYENNE<=18 "
    )
    moyenne_data = cursor.fetchall()

    for row in moyenne_data:
        moyenne = row[0]
        data7.append({"moyenne": moyenne})

    cursor.close()

    return jsonify(data7)


# page specialite
@app.route("/api/data8")
def doGetData8():
    data8 = []

    conn = mysql.connect()
    cursor = conn.cursor()

    specialites = [
        "SPECIALITE_1",
        "SPECIALITE_2",
        "SPECIALITE_3",
        "SPECIALITE_4",
        "SPECIALITE_5",
        "SPECIALITE_6",
        "SPECIALITE_7",
    ]  # Replace with your actual specialite names

    for specialite in specialites:
        cursor.execute(
            f"SELECT COUNT(*) FROM resultats WHERE specialite='{specialite}'"
        )
        count_result = cursor.fetchall()
        count_value = [item[0] for item in count_result]

        data8.append({"specialite": specialite, "data": count_value[0]})

    cursor.close()

    data_JSON8 = json.dumps(data8)
    return data_JSON8


@app.route("/api/data9")
def doGetData9():
    data9 = []

    conn = mysql.connect()
    cursor = conn.cursor()

    specialites = [
        "SPECIALITE_1",
        "SPECIALITE_2",
        "SPECIALITE_3",
        "SPECIALITE_4",
        "SPECIALITE_5",
        "SPECIALITE_6",
        "SPECIALITE_7",
    ]  # Replace with your actual specialite names

    for specialite in specialites:
        # Success count
        cursor.execute(
            f"SELECT COUNT(*) FROM resultats WHERE specialite='{specialite}' AND moyenne >= 10"
        )
        success_result = cursor.fetchall()
        success_value = [item[0] for item in success_result]

        # Fail count
        cursor.execute(
            f"SELECT COUNT(*) FROM resultats WHERE specialite='{specialite}' AND moyenne < 10"
        )
        fail_result = cursor.fetchall()
        fail_value = [item[0] for item in fail_result]

        data9.append(
            {
                "specialite": specialite,
                "success": success_value[0],
                "fail": fail_value[0],
            }
        )

    cursor.close()

    data_JSON9 = json.dumps(data9)
    return data_JSON9


@app.route("/api/data10")
def doGetData10():
    data10 = []

    conn = mysql.connect()
    cursor = conn.cursor()

    specialites = [
        "SPECIALITE_1",
        "SPECIALITE_2",
        "SPECIALITE_3",
        "SPECIALITE_4",
        "SPECIALITE_5",
        "SPECIALITE_6",
        "SPECIALITE_7",
    ]  # Replace with your actual specialite names

    for specialite in specialites:
        cursor.execute(
            f"SELECT AVG(moyenne) FROM resultats WHERE specialite='{specialite}'"
        )
        avg_result = cursor.fetchall()
        avg_value = [item[0] for item in avg_result]

        data10.append({"specialite": specialite, "average": avg_value[0]})

    cursor.close()

    data_JSON10 = json.dumps(data10)
    return data_JSON10


@app.route("/api/data11")
def doGetData11():
    data11 = []

    conn = mysql.connect()
    cursor = conn.cursor()

    specialites = [
        "SPECIALITE_1",
        "SPECIALITE_2",
        "SPECIALITE_3",
        "SPECIALITE_4",
        "SPECIALITE_5",
        "SPECIALITE_6",
        "SPECIALITE_7",
    ]  # Replace with your actual specialite names

    for specialite in specialites:
        cursor.execute(
            f"SELECT COUNT(*) FROM resultats WHERE specialite='{specialite}' AND sexe='F'"
        )
        count_femme_result = cursor.fetchall()
        count_femme_value = [item[0] for item in count_femme_result]

        cursor.execute(
            f"SELECT COUNT(*) FROM resultats WHERE specialite='{specialite}' AND sexe='H'"
        )
        count_homme_result = cursor.fetchall()
        count_homme_value = [item[0] for item in count_homme_result]

        data11.append(
            {
                "specialite": specialite,
                "count_femme": count_femme_value[0],
                "count_homme": count_homme_value[0],
            }
        )

    cursor.close()

    data_JSON11 = json.dumps(data11)
    return data_JSON11


@app.route("/api/data12")
def doGetData12():
    data12 = []
    conn = mysql.connect()
    cursor = conn.cursor()

    specialites = [
        "SPECIALITE_1",
        "SPECIALITE_2",
        "SPECIALITE_3",
        "SPECIALITE_4",
        "SPECIALITE_5",
        "SPECIALITE_6",
        "SPECIALITE_7",
    ]

    for specialite in specialites:
        # Maximum Moyenne
        cursor.execute(
            f"SELECT MAX(MOYENNE) FROM resultats WHERE SPECIALITE = '{specialite}'"
        )
        max_moyenne_result = cursor.fetchone()
        max_moyenne = max_moyenne_result[0] if max_moyenne_result else None

        # Minimum Moyenne
        cursor.execute(
            f"SELECT MIN(MOYENNE) FROM resultats WHERE SPECIALITE = '{specialite}'"
        )
        min_moyenne_result = cursor.fetchone()
        min_moyenne = min_moyenne_result[0] if min_moyenne_result else None

        data12.append(
            {
                "specialite": specialite,
                "max_moyenne": max_moyenne,
                "min_moyenne": min_moyenne,
            }
        )

    cursor.close()

    return jsonify(data12)


@app.route("/api/data13")
def doGetData13():
    data13 = []
    conn = mysql.connect()
    cursor = conn.cursor()
    cursor.execute("SELECT MOYENNE FROM resultats WHERE SPECIALITE = 'SPECIALITE_2'")
    moyenne_data = cursor.fetchall()

    for row in moyenne_data:
        moyenne = row[0]
        data13.append({"moyenne": moyenne})

    cursor.close()

    return jsonify(data13)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
