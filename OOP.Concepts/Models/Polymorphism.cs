namespace OOP.Concepts.Models
{
  class Animal  // Base class (parent) 
  {
    // normally if we were to have derived classes containing
    // a method with the name already defined in the parent
    // when you create an instance of the derived class and call that method
    // you would get the output of the parent class ie. Animal aPig = new Pig() => aPig.animalSound() => the animal makes a sound
    // by having the base method be virtual we can override the original and get the new output
    public virtual void animalSound() 
    {
      Console.WriteLine("The animal makes a sound");
    }
  }

  class Pig : Animal  // Derived class (child) 
  {
    public override void animalSound() 
    {
      Console.WriteLine("The pig says: wee wee");
    }
  }

  class Dog : Animal  // Derived class (child) 
  {
    // another option is to add the new keyword
    // new tells the compiler that you are adding a method to a derived class with the same name as a method in the base class, but they have no relationship to each other.
    public new void animalSound() 
    {
      Console.WriteLine("The dog says: bow wow");
    }
  }
}