//Given an array of meeting time intervals consisting of start and end times
//[[s1,e1],[s2,e2],...](si< ei), determine if a person could attend all meetings.

/*
  ExampleInputs

  Input:  [[0,30],[5,10],[15,20]]
  Output: false

  Input: [[7,10],[2,4]]
  Output: true
*/

//Sort the array by starting time, then compare the starting time of the next meeting vs the ending of this one
const CanAttendAllMeetings = (meetingsArray) => {
  // sorting by start time which is the first element
  const sortedMeetings = meetingsArray.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < meetingsArray.length - 1; i++) {
    if (sortedMeetings[i][1] > sortedMeetings[i + 1][0]) {
      return false;
    }
  }

  return true;
};

//should output false then true
console.log(
  CanAttendAllMeetings([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);

console.log(
  CanAttendAllMeetings([
    [7, 10],
    [2, 4],
  ])
);
