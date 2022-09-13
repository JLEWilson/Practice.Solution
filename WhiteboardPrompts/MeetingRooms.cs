using System.Linq;
/*
  ExampleInputs

  Input:  [[0,30],[5,10],[15,20]]
  Output: false

  Input: [[7,10],[2,4]]
  Output: true
*/
public class MeetingRooms
{
  public int[][] Meetings { get; set; }
  public MeetingRooms(int[][] meetings)
  {
    this.Meetings = meetings;
  }
  public static bool CanAttendAllMeetings()
  {
    //this will sort by the start time which is the first item in the inner arrays
    int[][] sorted = this.Meetings.OrderBy(array => array[0]).ToArray();

    for(int i = 0; i < sorted.Length -1; i++)
    {
      if(sorted[i][1] > sorted[i + 1][0])
      {
        return false;
      }
    }

    return true;
  }
}