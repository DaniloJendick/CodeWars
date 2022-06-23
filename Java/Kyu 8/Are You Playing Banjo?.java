public class Banjo {
  public static String areYouPlayingBanjo(String name) {
    String[] letter = name.split("");
    String result;
    System.out.println("a".toUpperCase());
    if(letter[0].toUpperCase().equals("R")) 
    {
    result = name +" plays banjo";}
    else{
    result = name +" does not play banjo";}
    //
    System.out.println(result);
      return result;
    
  }
}
