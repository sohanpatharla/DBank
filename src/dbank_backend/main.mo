import Debug "mo:base/Debug";
import Float "mo:base/Float";
import Int "mo:base/Int";
import Time "mo:base/Time";

  actor DBank{
  stable var currentValue:Float= 100;
    currentValue:= 100;

   stable var startTime = Time.now();

  Debug.print(debug_show (startTime));

  
  public func topUP(amount:Float) {
     currentValue+=amount;
    Debug.print(debug_show (currentValue));
  };
  public func withDraw(amount : Float) {
    let temp:Float=currentValue-amount;
    if(temp > 0){
      currentValue-=amount;
    Debug.print(debug_show (currentValue));
    }
    else{
      Debug.print("Insufficient Balance");
    }
  };
  public query func checkBalance() : async Float {
    return currentValue;
  };
  public func compound() {
    let currentTime=Time.now();
    let ElapsedTime = (currentTime-startTime)/1000000000;
    currentValue:=currentValue*(1.001**Float.fromInt(ElapsedTime));
    startTime:=currentTime;
  };


};