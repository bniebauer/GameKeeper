using System;
namespace GameKeeper.Models
{
    public class GameModel
    {
        public long ID { get; set; }
        public string Title { get; set; }
        public int NumberOfPlayers { get; set; }
        public string Summary { get; set; }
    }
}
