import time
import selenium
import re
import getpass
import csv
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
from selenium import webdriver
from time import sleep
#We take help from youtube for this specific part link is https://www.youtube.com/watch?v=3KaffTIZ5II
class DataGathering:

        def TwitterConfig(self,topic):

            driver=webdriver.Chrome()#download chromedriver same version as browser for chrome  and save pyhton->script
            driver.get("https://twitter.com/login")
            username=driver.find_element_by_xpath('//input[@name="session[username_or_email]"]')#getting input login field
            username.send_keys('saleemsalik786@gmail.com')#send input value to field
            my_password="desitwitter079"
            password=driver.find_element_by_xpath('//input[@name="session[password]"]')
            password.send_keys(my_password)
            password.send_keys(Keys.RETURN)

            # search topic of your choice
            tweet_list=[]
            search_topic=driver.find_element_by_xpath('//input[@aria-label="Search query"]')
            search_topic.send_keys(topic)
            search_topic.send_keys(Keys.RETURN)
            tweet_ids = set()
            last_position = driver.execute_script("return window.pageYOffset;")
            scrolling = True
            while scrolling:
                page_cards = driver.find_elements_by_xpath('//div[@data-testid="tweet"]')
                for card in page_cards[-100:]:
                    tweet = self.get_tweet_data(card)
                    if tweet:
                        tweet_id = ''.join(tweet)
                        if tweet_id not in tweet_ids:
                            tweet_ids.add(tweet_id)
                            tweet_list.append(tweet)
                scroll_attempt = 0
                while True:
                    driver.execute_script('window.scrollTo(0, document.body.scrollHeight);')
                    sleep(2)
                    curr_position = driver.execute_script("return window.pageYOffset;")
                    if last_position == curr_position:
                        scroll_attempt += 1
                        # end of scroll region
                        if scroll_attempt >= 3:
                            scrolling = False
                            break
                        else:
                            sleep(2)  # attempt another scroll
                    else:
                        last_position = curr_position
                        break
            self.writeToCsv(tweet_list)
            driver.close()

        def get_tweet_data(self,article):
            """Extract data from tweet card"""
            username =article.find_element_by_xpath('.//span').text
            comment = article.find_element_by_xpath('.//div[2]/div[2]/div[1]').text
            responding = article.find_element_by_xpath('.//div[2]/div[2]/div[2]').text
            text = responding+comment
            tweet = (username, text)
            return tweet
        def writeToCsv(self,data):
            with open('gather_tweets.csv', 'w', newline='', encoding='utf-8') as f:
                writer = csv.writer(f)
                writer.writerows(data)
obj=DataGathering()
print('Enter Topic with hashtag to search on twitter:')
x = input()
obj.TwitterConfig(x)
