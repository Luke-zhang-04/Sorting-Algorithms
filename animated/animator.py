"""Animator to animate objects
Copyright (C) Luke Zhang | MIT License | https://luke-zhang-04.github.io/
"""
from typing import List

from CanvasPlus import CanvasPlus


class Animator(CanvasPlus):
    """Animator class"""

    def render(self, data: List[int]):
        """Render graph"""
        self.update()

        width, height = self.winfo_width(), self.winfo_height()

        widthInc, heightInc = width / len(data), height / max(data)

        for index, value in enumerate(data):
            self.create_rectangle(
                index * widthInc,
                0,
                index * widthInc + widthInc,
                value * heightInc,
                fill="white",
                outline="black",
                width=0.5,
            )

        self.update()
