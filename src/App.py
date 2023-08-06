from flask import Flask, render_template, request

app = Flask(__name__)
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import SVC
from sklearn.metrics import classification_report

# Load the dataset (assuming it has 'description' and 'crime_type' columns)
data = pd.read_csv('dataset.csv')
keywords = {
    'Assault': ['assault', 'punched', 'hit', 'attacked', 'assailant', 'assaulted', 'physically harmed'],
    'Attempted Homicide': ['stab', 'stabbed', 'knife', 'attempted homicide', 'homicide attempt', 'tried to kill'],
    'Accidental Injury': ['accidental', 'injured accidentally', 'fell', 'slipped', 'trip', 'burn', 'poisoned'],
    'Robbery': ['robbed', 'stolen', 'theft', 'robbery', 'stole', 'theft incident'],
    'Kidnapping': ['kidnapped', 'abducted', 'held hostage', 'kidnapping', 'hostage situation', 'held against will'],
    'Arson': ['arson', 'fire', 'burned intentionally', 'arsonist', 'fire damage', 'deliberate fire'],
    'Poisoning': ['poisoned', 'ingested toxic', 'poisonous', 'consumed harmful', 'accidental poisoning'],
    'Animal Attack': ['animal attack', 'bitten by', 'animal bite', 'wild animal', 'stray dog'],
    'Homicide': ['murder', 'killed', 'homicide', 'dead', 'slain', 'lifeless'],
    "Burglary": ["burglarized", "injured", "break-in", "theft", "property", "trespassing"],
    "Kidnapping": ["kidnapped", "abducted", "captivity", "ransom", "hostage", "violence"],
    "Homicide": ["murdered", "killed", "slain", "death", "victim", "violence"],
    "Domestic Violence": ["abuse", "violence", "injured", "assaulted", "intimate partner"],
    "Gang Violence": ["gang-related", "violence", "injured", "assaulted", "territory"],
    "Carjacking": ["carjacked", "vehicle theft"],
    "Sexual Assault": ["sexual assault", "rape", "abuse", "injured", "violence"],
    "Home Invasion": ["home invasion", "injured", "burglarized", "trespassing", "violence", ]
}
# Preprocess the data (if needed)
# ...

# Split the data into training and testing sets
X = data['description']
y = data['crime_type']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Convert text to numerical features using TF-IDF vectorization
vectorizer = TfidfVectorizer(max_features=1000)  # You can adjust the number of features as needed
X_train_tfidf = vectorizer.fit_transform(X_train)
X_test_tfidf = vectorizer.transform(X_test)

# Train a Support Vector Machine (SVM) classifier
classifier = SVC()
classifier.fit(X_train_tfidf, y_train)
# Make predictions on the test set
y_pred = classifier.predict(X_test_tfidf)
# Evaluate the model
#print("Classification Report:")
#print(classification_report(y_test, y_pred))

# Simple function to perform the prediction (replace this with your actual prediction logic)
def perform_prediction(injury_description):
    max_matches = 0
    predicted_crime = 'Unknown'
    for crime_type, crime_keywords in keywords.items():
        matches = sum(keyword in injury_description.lower() for keyword in crime_keywords)
        if matches > max_matches:
            max_matches = matches
            predicted_crime = crime_type

    # Convert the input description to numerical features
    input_tfidf = vectorizer.transform([injury_description])

    # Predict the crime type
    crime_type_1 = classifier.predict(input_tfidf)[0]
    if crime_type==crime_type_1:
        return crime_type
    else:
        return crime_type,crime_type_1

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        description = request.form['description']
        prediction = perform_prediction(description)
        return render_template('index.html', prediction=prediction)
    else:
        return render_template('index.html', prediction=None)

if __name__ == '__main__':
    app.run(debug=True)
