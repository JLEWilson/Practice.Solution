// Inheritance allows us to use the properties and methods of an existing class
// this is can save us a lot of time
namespace OOP.Concepts.Models
{
  public class Vehicle
  {
    //in this base class we have all of the properties and methods
    // we want in Every sub class
    public int Wheels { get; set; }
    public int Doors { get; set; }
    public string DriverName { get; set; }
    public Vehicle(int wheels, int doors, string driverName)
    {
      this.Wheels = wheels;
      this.Doors = doors;
      this.DriverName = driverName;
    }
    public void Start()
    {
      Console.WriteLine("The car has turned on");
    }
  }

  public class Coup : Vehicle
  {
    //in this example coup is a derived class
    // it is created from vehicle so it contains all of the same properties and methods
    // You could instantiate a Coup and run coup.start
    // Coup has it's own additional properties and methods, but we still
    // need to pass the information about what is needed in the base class (doors etc)
    // to do this we use the base keyword
    public string PassengerName { get; set; }
    public Coup(int wheels, int doors, string driverName, string passengerName) : base(wheels, doors, driverName)
    {
      this.PassengerName = passengerName;
    }
  }
}