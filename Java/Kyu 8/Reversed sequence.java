public class Sequence{
  public static int[] reverse(int n){
    int[] a = new int[n];
    int b = 0;
    for(int i = n; i > 0; i--){ 
      a[b] = i;
      b++;
    }
    return a;
    }
}
