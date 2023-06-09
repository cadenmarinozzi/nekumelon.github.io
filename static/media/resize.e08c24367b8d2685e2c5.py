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
        and not os.path.exists("./lowres/" + image)
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
        img2 = img.resize((w, h), Image.ANTIALIAS)
        img2.save("./lowres/" + image)

        # Resize
        w = 1920
        h = int(w / aspectRatio)

        # Resize to 1920
        img3 = img.resize((w, h), Image.ANTIALIAS)
        img3.save(image)
