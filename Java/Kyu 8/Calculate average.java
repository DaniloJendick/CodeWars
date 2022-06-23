public class Kata{
  public static double find_average(int[] array){
    double result = 0;
    for(int i = 0; i <array.length; i++){
      result +=  array[i];
      System.out.println(array[i]);
      
    }
    System.out.println("array lengrh :" + array.length);
    
    return result/array.length;
  }
}
