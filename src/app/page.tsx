import { prisma } from "@/shared/lib/db";
import { Button } from "@/shared/ui/button";
import { Card, CardTitle } from "@/shared/ui/card";

export default async function Home() {
  const games = await prisma.game.findMany();

  console.log(games, "gggggggggggg");

  return (
    <div>
      <Button size="lg" variant="secondary">
        Hiii
      </Button>
      {games.map((game) => (
        <Card key={game.id}>
          <CardTitle>{game.name}</CardTitle>
        </Card>
      ))}
    </div>
  );
}
