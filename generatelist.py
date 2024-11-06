import glob

files = glob.glob("img/*")
with open("galleryimgs.txt", "w") as f:
    for file in files:
        f.write(file)
        f.write("\n")        