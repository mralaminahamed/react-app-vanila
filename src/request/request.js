const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google Meet",
            time: "10.00 PM"
        };
        resolve(meetingDetails);
    } else {
        reject(new Error('Meeting already scheduled!'));
    }
});

const addToCalendar = (meetingDetails) => {
    const calender = `${meetingDetails.name} was scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
    return Promise.resolve(calender);
}

// meeting
//     .then(addToCalendar)
// .then((res) =>{
//     console.log(res)
// })
//     .catch((err)=> console.log(err.message))

async function myMeeting() {
    try {
        const meetingDetails = await meeting;
        const calendar = await addToCalendar(meetingDetails);
        console.log(calendar)
    } catch (e) {
        console.log(`Something wrong happened!`, e)
    }
}

myMeeting()
myMeeting()
