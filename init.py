import os
import nltk

def install_libraries():
    libraries = [
        "flask",
        "pandas",
        "sklearn",
        "matplotlib",
        "nltk",
        "difflib"
    ]

    for library in libraries:
        os.system(f"pip install {library}")

def download_nltk_packages():
    nltk_packages = [
        "stopwords",
        "punkt"
    ]

    for package in nltk_packages:
        nltk.download(package)

if __name__ == "__main__":
    install_libraries()
    download_nltk_packages()
