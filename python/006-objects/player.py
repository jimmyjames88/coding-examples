class Player:
    def __init__(self, startRow, startCol):
        self.row = startRow
        self.col = startCol

    def moveLeft(self):
        self.col = self.col - 1

player1 = Player(3, 2)

player1.moveLeft()