import os
from PIL import Image

images = os.listdir(".")

if not os.path.exists("./lowres"):
    os.mkdir("./lowres")

for image in images:
    if (
        image.endswith(".png")
        or image.endswith(".jpg")
        or image.endswith(".jpeg")
        and not image.endswith("_lowres.png")
    ):
        print(image)
        img = Image.open(image)

        # Get image dimensions
        w, h = img.size
        aspectRatio = w / h

        # Resize
        w = 400
        h = int(w / aspectRatio)

        # Resize but keep aspect ratio
        img = img.resize((w, h), Image.ANTIALIAS)
        img.save("./lowres/" + image)
