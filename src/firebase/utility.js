import firebase, { database } from './config';

export const getUsernameFromDatabase = async (userId) => {
  try {
    const data =  await (await database.ref("srijan/profile/" + userId + "/parentprofile/name").once('value')).val();
    return data;
  } catch (err) {
    console.log(err);
    return '';
  }
}

export const getUserData = async (userId) => {
  try {
    return await (await database.ref("srijan/profile/" + userId).once('value')).val();
  } catch (err) {
    console.log(err);
  }
}

export const getUserInfo = async (userId) => {
  try {
    return await (await database.ref("srijan/profile/" + userId + "/parentprofile").once('value')).val();
  } catch (err) {
    console.log(err);
  }
}

export const getUserEvents = async (userId) => {
  try {
    return await (await database.ref("srijan/profile/" + userId + "/events").once('value')).val();
  } catch (err) {
    console.log(err);
  }
}

export const writeUserData = async (userId, userName, email, year, department, college) => {
  try {
    database.ref("srijan/profile/" + userId + "/parentprofile").set({
      name: userName,
      email: email,
      year: year,
      course: department,
      college: college,
      complete: 1
    })
  } catch (err) {
    console.log(err);
  }
}

export const updateUserData = async (userId, year, department, college) => {
  try {
    const updatedUserDetails = {
      updatetime: firebase.database.ServerValue.TIMESTAMP,
      year: year,
      course: department,
      college: college,
      complete: 1
    }
    database.ref("srijan/profile/" + userId + "/parentprofile").update(updatedUserDetails);
  } catch (err) {
    console.log(err);
  }
}

export const getEventData = async (eventID) => {
  try {
    const eventRef = await database.ref("srijan/events/" + eventID).once('value');
    const eventData = eventRef.val();
    return eventData;
  } catch (err) {
    console.log(err);
  }
}

export const getEvents = async () => {
  try {
    const querySnapshot = await database.ref("srijan/events").once('value');
    return querySnapshot.val();
  } catch (err) {
    console.log(err);
  }
}

export const getUserIdFromEmail = async (email) => {
  const snapshot = await database.ref("srijan/profile").orderByChild('parentprofile/email').equalTo(email).once('value');
  if (!snapshot.val()) {
    return null;
  }
  return Object.keys(snapshot.val())[0];
}
