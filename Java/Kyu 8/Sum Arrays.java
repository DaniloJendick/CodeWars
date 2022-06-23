public class SumArray {

  public static double sum(double[] numbers) {
    double result;
    result = 0;
    for(int i = 0; i < numbers.length; i++){
      result += numbers[i];
      }
    return result;
  }
}
