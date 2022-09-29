namespace OOP.Concepts.Models
{
  //Abstraction is a part of encapsulation
  public class Encapsulation 
  {
    //this auto implemented property is an example encapsulation under the hood
    public string Details { get; set; } 
    // for a clearer look at the encapsulation this is what happens behind the scenes
    private int myIntField = 0;
    public int MyInt
    {
        // This is your getter.
        // it uses the accessibility of the property (public)
        get
        {
            return myIntField;
        }
        // this is your setter
        // Note: you can specify different accessibility
        // for your getter and setter.
        protected set
        {
            // You can put logic into your getters and setters
            // since they actually map to functions behind the scenes
            if (DoSomeValidation(value))
            {
                // The input of the setter is always called "value"
                // and is of the same type as your property definition
                myIntField = value;
            }
        }
    }
    public Encapsulation() 
    {
      Details = "Encapsulation is an objects ability to hide data and behavior that are not necessary to its user. Encapsulation enables a group of properties, methods and other members to be considered a single unit or object.";
    }
    private bool DoSomeValidation(int val)
    {
      // returns true on even number
      return val % 2 == 0;
    }
  }
}