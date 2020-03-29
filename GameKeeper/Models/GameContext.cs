using Microsoft.EntityFrameworkCore;

namespace GameKeeper.Models
{
    public class GameContext : DbContext
    {
        public GameContext(DbContextOptions<GameContext> options) : base(options)
        {
        }

        public DbSet<GameModel> Games { get; set; }
    }
}
