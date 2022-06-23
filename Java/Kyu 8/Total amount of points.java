/*Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point*/

public class TotalPoints {
    public static int points(String[] games) {
      int[] newArray = new int[games.length];
      int individualGame = 0;
      String[] arrOfStr = new String[3];
      int x = 0;
      for(int i = 0; i < games.length; i++){
         arrOfStr = games[i].split("", 0);
         x += 
          Integer.parseInt(arrOfStr[0]) > Integer.parseInt(arrOfStr[2]) ? 3 :  
          Integer.parseInt(arrOfStr[0]) < Integer.parseInt(arrOfStr[2]) ? 0 : 1;
         
      }
      return x;
    }
}
