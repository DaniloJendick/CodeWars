public class Clock
{
  public static int Past(int h, int m, int s) 
  {
      int result = 0;
      result += (h > 0) ? h*60*60 : 0;
      result += (m > 0) ? m*60 : 0;
      result += s;
      return result * 1000;
      
      
  }
}
