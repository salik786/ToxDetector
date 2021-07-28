import csv
import re
import emoji
import numpy
import enchant
class DataCleaning:

    #Used to load Csv for later data cleaninsing
    def loadCsv(self,filename):
        data=[]
        with open(filename,encoding = 'cp850') as file: #cp850 is used for this type of reading file
            reader=csv.reader(file)
            for row in reader:
                data.append(row[0])
        print("Data Read Successfully")
        return data

    #Used to remove unwanted emojis from the text
    def getStringIndexForClean(self,data):
        text=""
        textCharacter=""
        data1 =list()
        for index in data:
            # hashtag = self.getHashtagList(index) #if we want to extract hashtags from text
            text =self.removeUnwantedCharacters(index)
            text=self.removeEnglishSentences(text)
            data1.append(text)
        return data1


    def removeEnglishSentences(self,sentence):
        d = enchant.Dict("en_US")
        words = sentence.split()
        counter = 0
        length = len(words)

        for i, value in enumerate(words):
            if  i < 6:
                 if d.check(value):
                     counter += 1
                     print(value)



        perEnglishWords=(counter/length) *100
        if perEnglishWords >= 40 :
             print(sentence)
             print("Text contain english words")

    def removeUnwantedCharacters(self, text):
        newstring=""
        for punctuation in text:
            newstring += re.sub(r"[^a-zA-Z\s]+", '', punctuation)
        text=newstring
        return text

    def getHashtagList (self,data):
        count=0;
        hashtag_list=[]
        res = data.split()
        # printing result
        text=""
        for i in res:
            if i[0]=='#':
                hashtag_list.append(i)
        return hashtag_list

    def cleanhtml(self,data):

        cleanr = re.compile('<.*?>')
        cleantext = re.sub(cleanr, '', data)
        return cleantext

    def writeToCsv(self,data):
        print(data)
        header=['Tweets','Hashtags','Labels']
        with open("clean_data.csv",'w' ,encoding = 'cp850',newline='') as f:
            writer=csv.DictWriter(f,fieldnames=header)
            writer.writeheader()
            for item in data:
                writer.writerow([item])
            f.close()

objClean=DataCleaning()
a=objClean.loadCsv("testdata.csv")
b=objClean.getStringIndexForClean(a)

# b=objClean.removeEmojis(a)
# objClean.writeToCsv(b)