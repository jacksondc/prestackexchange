/* ---------------------------------------------------- +/

## Fixtures ##

Fill in the app with dummy data if database is empty.

/+ ---------------------------------------------------- */

// Fixture data
if (Questions.find().count() === 0) {

  Questions.insert({
    title: "Eridanus",
    body: "Eridanus is a constellation. It is represented as a river; its name is the Ancient Greek name for the Po River."
  });

  Questions.insert({
    title: "Cassiopeia",
    body: "Cassiopeia is a constellation in the northern sky, named after the vain queen Cassiopeia in Greek mythology, who boasted about her unrivalled beauty."
  });

  Questions.insert({
    title: "Scorpius",
    body: "Scorpius, sometimes known as Scorpio, is one of the constellations of the zodiac."
  });

}