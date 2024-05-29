import cv2
from cvzone.HandTrackingModule import HandDetector

cap = cv2.VideoCapture(1)
detector = HandDetector(maxHands=1)
offset = 50
counter = 0

folder = "C:/Users/Arish Ahmed/Sign-Language-detection/Data"

while True:
    success, img = cap.read()
    hands, img = detector.findHands(img,draw=True)
    if hands:
        hand = hands[0]
        x, y, w, h = hand['bbox']
        # print(x, y, w, h)

        imgCrop = img[y-offset:y + h + offset, x-offset:x + w + offset]
        cv2.imshow('ImageCrop', imgCrop)
    

    cv2.imshow('Image', img)
    key = cv2.waitKey(1)
    if key == ord("s"):
        cv2.imwrite(f'{folder}/{counter}.jpg', imgCrop)
        print(counter)
        counter += 1