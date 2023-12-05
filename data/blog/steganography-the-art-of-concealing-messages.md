---
title: Steganography - The Art of Concealing Messages
slug: steganography-the-art-of-concealing-messages
cover: "/static/images/blogs/18.png"
blurUrl: "data:image/jpeg;base64,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"
description: Would you like the ability to communicate privately with a fellow engineer using an encrypted method, reminiscent of how Nazi operators communicated during World War II(this sounds cool imo)? If so, this article may be of interest to you.
date: "2023-10-28"
---

## Backstory

When I was an intern in a certain financial startup, one of my seniors talked about how he utilize certain cryptography library (in nodejs), to detect and prevent user from submiting a malicious image which called Steganography, A the practice of hiding information within other data (usually images). The problem arise when the information being hidden is a malicious script that can break or steal your application data when submited from a FORM to your application server. In this short we will briefly talk about this Steganography thing with a simple example written in Python.

## Steganography History

TL:DR. Steganography, the ancient art of hidden communication, has a rich and intriguing history that spans centuries. Its roots can be traced back to ancient Greece, where Herodotus wrote of a message concealed within a slave's shaven head. In the Renaissance era, artists like Leonardo da Vinci used steganography to hide their scientific notes within their paintings, combining art and science in a fascinating way. During World War II, both the Allies and Axis powers employed steganographic techniques to transmit covert messages and sensitive information, often using seemingly innocuous items like playing cards or postage stamps. With the digital age came a new era of steganography, where information is hidden within digital files like images and audio, making it a powerful tool for espionage, privacy, and cybercrime.

![flow](/static/images/blogs/18.png)

## Example

Let's start with a picture. This is the original image:

![Winter](/static/images/blogs/steganography/winter.png)

This is the modified image with the hidden message:

![Winter LSB](/static/images/blogs/steganography/winter-encoded.png)

But wait, they look exactly the same, right? That is good, it means the changes made in the image were not perceptible by human eyes.

If you want to understand better how the LSB (Least Significant Bit) works check the following explanation.

## Steganography Impacts

Here's a list of both positive and negative implementations of steganography in engineering:

Positive Implementations:

1. Data Protection: Steganography can be used to hide sensitive information within digital files, providing an extra layer of security and confidentiality. For example, embedding confidential messages within image files can help protect them from unauthorized access.
2. Copyright Protection: Steganography can be employed to embed copyright or ownership information within media files, such as images or videos, to deter intellectual property theft and piracy.
3. Digital Watermarking: It can be used for embedding watermarks into images, audio, or video files to verify their authenticity and prevent unauthorized use or distribution.
4. Secure Communication: Steganography can facilitate secure communication, especially in situations where encryption may raise suspicion. By hiding messages within innocuous files, it can help users exchange information covertly.

Negative Implementations:

1. Cybercrime: Steganography is sometimes used for malicious purposes, enabling cybercriminals to conceal malware, such as viruses or ransomware, within seemingly harmless files to bypass security measures and infect target systems.
2. Espionage: State actors and espionage groups may employ steganography to hide sensitive information in digital files to avoid detection during data exfiltration or covert communication, potentially posing national security risks.
3. Privacy Invasion: Some individuals may misuse steganography to secretly embed tracking or spyware in multimedia content, compromising the privacy and security of unsuspecting users.
4. Terrorist Activities: Terrorist organizations may use steganography to hide messages, plans, or recruitment materials within digital media files, making it challenging for authorities to detect and prevent potential threats.

It's important to emphasize that while steganography has legitimate and constructive applications, it can also be exploited for nefarious purposes. Software engineers and security professionals play a crucial role in both harnessing its positive potential and defending against its negative implications by developing tools and techniques for detection and prevention.

## Steganography Technique

The Least Significant Bit (LSB) steganography is one of the simplest and most common techniques used to hide information within digital images.It refers to pixels. Grayscale image pixels are broken into eight bits, and the last bit, the eighth one, is called the Least Significant Bit. Hackers use this bit to embed malicious code because the overall pixel value will be reduced by only one, and the human eye can’t detect the difference in the image. So, no one is even aware that anything is amiss, and that the image is carrying something dangerous within.

In this particular blog I would like to show you the implementation of steganorgraphy in *Hiding secret messages within a normal image (probably a meme?) as secret way of communicating with your friends (also could be used for copyright protection)*, will be implemented using Python with LSB technique.

## How Least Significant Bit (LSB) Works

To understand how LSB works you need to understand first how a pixel works.

A pixel color is defined by 3 channels: **R**ed, **G**reen, **B**lue, also known as RGB.

Each channel can have a value in a range between 0 and 255. The higher the value of a channel, the more intense its color.

|       |  R  |  G  |  B  |
|-------|---|---|---|
| black |  0  |  0  |  0  |
| red   | 255 |  0  |  0  |
| green |  0  | 255 |  0  |
| blue  |  0  |  0  | 255 |
| white | 255 | 255 | 255 |


You can use any combination of those channels to generate the color you want.

#### Binary

Each channel of a pixel needs 1 byte, which means, 8 bits, that is, 8 1s and 0s.

Let's check an example of a blue pixel:

|         |    R     |    G     |    B     |
| ------- | :------: | :------: | :------: |
| integer |    0     |    0     |   255    |
| binary  | 00000000 | 00000000 | 11111111 |

It will result in a blue pixel, but what will happen if we change the value of the blue channel from 255 to 254?

|         |    R     |    G     |    B     |
| ------- | :------: | :------: | :------: |
| decimal |    0     |    0     |   254    |
| binary  | 00000000 | 00000000 | 11111110 |

We just change a single bit of the pixel, the last one (the **L**east **S**ignificant **B**it). Let's check the colors:

![RGB 1](/static/images/blogs/steganography/rgb-1.png)

The two blue colors are pretty similar. Even if they're joined we won't be able to see the difference:

![RGB 2](/static/images/blogs/steganography/rgb-2.png)


We can make this change on the 3 channels, it means that we can store 3 bits per pixel and the final image will look much similar to the original one.

### ASCII Table

To encode the message, we get the respective decimal value from the [ASCII table](http://www.asciitable.com/). Check the following example:

If we want to encode a single letter "a", the decimal value for this letter according to the table is 97, in binary: **01100001**.

How we can store 3 bits per pixel, only changing the last bit, we'll need 3 pixels to encode the 'a' in our image.

The first pixel will store **0 1 1**, on the lasts bits of each RGB channel, the second will store **0 0 0**, and the third will store **0 1** (the blue channel will not be needed for this one).

Joining the last bits of these pixels we'll have: **01100001**, converting this binary to decimal will result in 97, which is "a" according to the ASCII table.

## Let the code talks

```python
import argparse
from stegano import lsb
from PIL import Image

def encode_lsb(image_path, secret_message, output_path):
    img = Image.open(image_path)
    secret = lsb.hide(img, secret_message)

    secret.save(output_path)

    print(f"Process complete. Encoded image saved to {output_path}")

def decode_lsb(encoded_image_path):
    secret = lsb.reveal(Image.open(encoded_image_path))

    return secret

def main():
    parser = argparse.ArgumentParser(description="Encode or decode messages using LSB steganography.")
    parser.add_argument("-e", "--encode", action="store_true", help="Encode a message")
    parser.add_argument("-d", "--decode", action="store_true", help="Decode a message")
    parser.add_argument("-i", "--input", required=True, help="Input image path")
    parser.add_argument("-o", "--output", required=True, help="Output image path")
    parser.add_argument("-m", "--message", help="Message to encode")

    args = parser.parse_args()

    if args.encode:
        if not args.message:
            parser.error("You must provide a message to encode.")
        encode_lsb(args.input, args.message, args.output)
    elif args.decode:
        decoded_message = decode_lsb(args.input)
        print("Decoded Message:", decoded_message)
    else:
        parser.error("You must specify either -e (encode) or -d (decode).")

if __name__ == "__main__":
    main()

```

or even you can directly use stegano library as a command line

```python
$ stegano-lsb hide -i "image path" -m "Secret Message" -o "image path output"
$ stegano-lsb reveal -i "image path output"
Secret Message
```

### Notice
 If possible, consider using PNG images for steganography, as PNG uses lossless compression and is generally more suitable for hiding information without introducing noticeable artifacts.
(As a matter of fact, when I first tried the script, the JPEG file failed.)

**You can find me on**

Twitter: [https://twitter.com/mlven23](https://twitter.com/mlven23)\
GitHub: [https://github.com/melvnl](https://github.com/melvnl)\
LinkedIn: [https://github.com/melvnl](https://www.linkedin.com/in/melvin-liu/)

**Note**: If you have any questions, you can leave a message below by Sign In with your GitHub account 😉
