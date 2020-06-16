"""Animator to animate objects
Copyright (C) Luke Zhang | MIT License | https://luke-zhang-04.github.io/
"""
from time import sleep
from typing import List

from CanvasPlus import CanvasPlus


class Animator(CanvasPlus):
    """Animator class"""

    def render(self, data: List[int], cur: int = None) -> None:
        """Render graph"""
        self.delete("all")

        width, height = self.winfo_width(), self.winfo_height()

        widthInc, heightInc = width / len(data), height / max(data)

        self.rectangles = []

        for index, value in enumerate(data):
            color = "white"
            if cur and type(cur) == int and index == cur:
                color = "firebrick1"
            elif cur and type(cur) == tuple and index in cur:
                color = "firebrick1"
            elif cur and type(cur) == list and index in cur:
                color = "firebrick1"

            self.rectangles.append(
                self.create_rectangle(
                    index * widthInc,
                    height,
                    index * widthInc + widthInc,
                    height - value * heightInc,
                    fill=color,
                    outline="black",
                    width=0.5,
                )
            )

        self.update()

    def finished(self) -> None:
        """Call on finish, and make everything green"""
        for i in self:
            self.itemconfig(i, fill="white")

        for i in self.rectangles:
            self.itemconfig(i, fill="green")
            self.update()
            sleep(0.01)
