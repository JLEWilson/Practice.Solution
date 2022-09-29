namespace OOP.Concepts.Models
{
  public class Abstraction 
  {
    public string Details { get; set; } 
    public Abstraction() 
    {
      Details = "Abstraction is the process of naming your methods in a way that makes the input and output clear, only the relevant information is visible";
    }

    //examples
    // It is clear what this function does
    public int AddNumbers(int num1, int num2) 
    {
      return num1 + num2;
    }
  }

  // Stronger Example
  public class Car
  {
    public Car() {}

    public void Start()
    {
      // There are a lot of complex mechanisms in play to start a car but we do not need to know those
      // in order to use the start method, this makes it a lot easier to use this function elsewhere as a developer
    }
  }
}