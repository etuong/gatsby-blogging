---
title: The Drum Stop
stack: Next.js, HTML, CSS, JavaScript
description: asdfas
slug: the-drum-stop
date: 2021-01-18T00:00:00+00:00
thumb: ../../images/5.jpg
featuredImg: ../../images/5.jpg
---
---
jupyter:
  jupytext:
    formats: ipynb,md
  kernelspec:
    display_name: Python (en685648)
    language: python
    name: en685648
  language_info:
    codemirror_mode:
      name: ipython
      version: 3
    file_extension: .py
    mimetype: text/x-python
    name: python
    nbconvert_exporter: python
    pygments_lexer: ipython3
    version: 3.8.10
  nbformat: 4
  nbformat_minor: 5
---

::: {.cell .code execution_count="1"}
``` {.python}
%matplotlib inline
```
:::

::: {.cell .code execution_count="2"}
``` {.python}
import warnings
warnings.filterwarnings('ignore')

from tabulate import tabulate
import matplotlib.pyplot as plt
import sqlite3
import pandas as pd
import numpy as np
import seaborn as sns
import random as py_random
import scipy.stats as stats

sns.set(style="whitegrid")
```
:::

::: {.cell .markdown}
# Extract, Transform, Load (ETL)
:::

::: {.cell .markdown}
At this point, we should have:

1.  `meetup.sql` will create the data schema.
2.  `meetup.py` will fill the database tables with the correct data from
    the meetup JSON.
3.  `meetup.db` will have the data in it.
:::

::: {.cell .code execution_count="3"}
``` {.python}
conn = sqlite3.connect('../2 - get/meetup.db')
cursor = conn.cursor()
```
:::

::: {.cell .markdown}
Before we start with the exploratory data analysis, let us examine the
dataset to get a feeling of the sort of data we are handling.

As a summary from the \"Ask\" part of the assignment, here are some
questions to bear in mind while doing the analysis.

1.  What kind of events draw the most reservation? Board games? Karaoke?
    Hiking?
2.  What day of the week is the most popular?
3.  What time of the day do most members RSVP?
4.  How many events have we had in total in the past years? Are we
    collectively becoming more popular as a group?
5.  Are members more inclined to join events that are relatively more
    popular? What are some of the most popular events and what do they
    have in common?
6.  When members RSVP for an event, the data should provide information
    about this time. Is there a time that is more favorable to announce
    an event?

We can start by peeking at the schema. Limit to just first 30 rows.

Event can be viewed with URL
<https://www.meetup.com/%7Bgroup_name%7D/events/%7Bevent_id%7D/>

For example, if the event ID is 281289732 for 1-5GenAsians group,
<https://www.meetup.com/1-5GenAsians/events/281289732/>
:::

::: {.cell .code execution_count="4" scrolled="false"}
``` {.python}
data = cursor.execute("select event_id,event_date, rsvp_count, venue_lat, venue_lon, venue_city from event limit 30;")
print(tabulate(data.fetchall(), headers=["Event ID", "Event Date", 'RSVP Count', "Lat", "Lon", "City"], tablefmt='psql'))
```

::: {.output .stream .stdout}
    +------------+--------------+--------------+---------+----------+---------------+
    |   Event ID | Event Date   |   RSVP Count |     Lat |      Lon | City          |
    |------------+--------------+--------------+---------+----------+---------------|
    |  109370632 | 2013-03-22   |            5 | 47.6816 | -122.126 | Redmond       |
    |  109868492 | 2013-03-23   |            6 | 47.5287 | -121.825 | Snoqualmie    |
    |  111080172 | 2013-03-30   |           11 | 47.612  | -122.199 | Bellevue      |
    |  111088522 | 2013-03-30   |            3 | 48.0043 | -122.214 | Everett 98201 |
    |  110749042 | 2013-03-31   |            8 | 47.6034 | -122.201 | Bellevue      |
    |  111871212 | 2013-04-05   |           10 | 47.6098 | -122.204 | Bellevue      |
    |  112504332 | 2013-04-06   |            8 | 47.667  | -122.1   | Redmond       |
    |  113192492 | 2013-04-12   |           10 | 47.62   | -122.202 | Bellevue      |
    |  113176612 | 2013-04-13   |            4 | 47.6573 | -122.318 | Seattle       |
    |  114838502 | 2013-04-19   |            3 |         |          |               |
    |  116882312 | 2013-05-03   |            8 | 47.5772 | -122.169 | Bellevue      |
    |  113174462 | 2013-05-04   |            6 | 47.8593 | -121.971 | Monroe        |
    |  118200732 | 2013-05-11   |           10 | 47.612  | -122.199 | Bellevue      |
    |  119185682 | 2013-05-18   |            9 | 47.5984 | -122.325 | Seattle       |
    |  120390832 | 2013-05-24   |            8 | 47.7127 | -122.187 | Kirkland      |
    |  121853942 | 2013-06-02   |            9 | 47.5836 | -122.131 | Bellevue      |
    |  123022632 | 2013-06-07   |            8 | 47.613  | -122.2   | Bellevue      |
    |  123844992 | 2013-06-15   |           25 | 47.6906 | -122.402 | Seattle       |
    |  126498932 | 2013-06-28   |           11 | 47.6233 | -122.161 | Bellevue      |
    |  126318262 | 2013-06-29   |            1 |         |          |               |
    |  127652212 | 2013-07-03   |            4 | 47.7553 | -122.163 | Woodinville   |
    |  123571462 | 2013-07-06   |            3 | 47.6303 | -122.193 | Bellevue      |
    |  129354962 | 2013-07-13   |            3 | 47.599  | -122.325 | Seattle       |
    |  129003072 | 2013-07-13   |            7 | 47.6747 | -122.208 | Kirkland      |
    |  130608792 | 2013-07-27   |           20 | 47.5839 | -122.129 | Bellevue      |
    |  133462162 | 2013-08-10   |           12 | 47.7051 | -122.213 | Kirkland      |
    |  134488172 | 2013-08-17   |            9 | 47.6167 | -122.201 | Bellevue      |
    |  135768512 | 2013-08-24   |           21 | 47.5984 | -122.323 | Seattle       |
    |  136619502 | 2013-08-31   |           11 | 47.5836 | -122.131 | Bellevue      |
    |  135478542 | 2013-09-07   |            9 | 47.6659 | -122.114 | Redmond       |
    +------------+--------------+--------------+---------+----------+---------------+
:::
:::

::: {.cell .markdown}
Let\'s see some of the most popular events. I define this to be events
with the most RSVP.
:::

::: {.cell .code execution_count="5"}
``` {.python}
data = cursor.execute("select event_date, rsvp_count, event_id from event order by rsvp_count desc limit 15;")
print(tabulate(data.fetchall(), headers=['Event Date', 'RSVP Count', 'Event ID'], tablefmt='psql'))
```

::: {.output .stream .stdout}
    +--------------+--------------+------------+
    | Event Date   |   RSVP Count |   Event ID |
    |--------------+--------------+------------|
    | 2015-03-01   |          109 |  219920453 |
    | 2014-11-02   |          105 |  212049012 |
    | 2016-10-09   |          102 |  233570064 |
    | 2016-04-30   |           85 |  230305968 |
    | 2019-12-21   |           83 |  266398172 |
    | 2018-03-24   |           82 |  248285057 |
    | 2018-06-10   |           80 |  250424473 |
    | 2021-08-29   |           69 |  279628714 |
    | 2014-08-17   |           57 |  194901992 |
    | 2019-01-26   |           54 |  257948178 |
    | 2015-03-14   |           47 |  220103990 |
    | 2021-10-17   |           46 |  281053389 |
    | 2014-06-21   |           44 |  182543572 |
    | 2017-10-14   |           43 |  243442670 |
    | 2014-03-29   |           40 |  164683122 |
    +--------------+--------------+------------+
:::
:::

::: {.cell .code execution_count="6"}
``` {.python}
data = cursor.execute("select count(*) from event;")
print(f"Total number of events is {data.fetchone()[0]}")
```

::: {.output .stream .stdout}
    Total number of events is 814
:::
:::

::: {.cell .markdown}
Let\'s see the number of events we have for each month since this group
was founded in 2013.
:::

::: {.cell .code execution_count="7" scrolled="true"}
``` {.python}
num_event_per_month = list(cursor.execute("""select strftime('%Y-%m', event_date), count(*) from event 
    group by strftime('%Y-%m', event_date);"""))
print(tabulate(num_event_per_month, headers=['Month', 'Number of Events'], tablefmt='psql'))
```

::: {.output .stream .stdout}
    +---------+--------------------+
    | Month   |   Number of Events |
    |---------+--------------------|
    | 2013-03 |                  5 |
    | 2013-04 |                  5 |
    | 2013-05 |                  5 |
    | 2013-06 |                  5 |
    | 2013-07 |                  5 |
    | 2013-08 |                  4 |
    | 2013-09 |                  4 |
    | 2013-10 |                  7 |
    | 2013-11 |                  9 |
    | 2013-12 |                  6 |
    | 2014-01 |                  7 |
    | 2014-02 |                  3 |
    | 2014-03 |                  3 |
    | 2014-04 |                  7 |
    | 2014-05 |                 11 |
    | 2014-06 |                  4 |
    | 2014-07 |                  3 |
    | 2014-08 |                  4 |
    | 2014-09 |                  4 |
    | 2014-10 |                  8 |
    | 2014-11 |                  4 |
    | 2014-12 |                  2 |
    | 2015-01 |                  6 |
    | 2015-02 |                  6 |
    | 2015-03 |                  6 |
    | 2015-04 |                  4 |
    | 2015-05 |                  3 |
    | 2015-06 |                  6 |
    | 2015-07 |                  3 |
    | 2015-08 |                  6 |
    | 2015-09 |                 11 |
    | 2015-10 |                 11 |
    | 2015-11 |                 12 |
    | 2015-12 |                  9 |
    | 2016-01 |                 10 |
    | 2016-02 |                 10 |
    | 2016-03 |                 17 |
    | 2016-04 |                 16 |
    | 2016-05 |                  7 |
    | 2016-06 |                  7 |
    | 2016-07 |                 11 |
    | 2016-08 |                  2 |
    | 2016-09 |                  4 |
    | 2016-10 |                  4 |
    | 2016-11 |                  4 |
    | 2016-12 |                  6 |
    | 2017-01 |                  5 |
    | 2017-02 |                  4 |
    | 2017-03 |                  2 |
    | 2017-04 |                  2 |
    | 2017-05 |                  1 |
    | 2017-06 |                  2 |
    | 2017-07 |                  3 |
    | 2017-08 |                  2 |
    | 2017-10 |                  4 |
    | 2017-11 |                  9 |
    | 2017-12 |                  5 |
    | 2018-01 |                 10 |
    | 2018-02 |                 16 |
    | 2018-03 |                 14 |
    | 2018-04 |                 16 |
    | 2018-05 |                 17 |
    | 2018-06 |                 12 |
    | 2018-07 |                 16 |
    | 2018-08 |                 12 |
    | 2018-09 |                 15 |
    | 2018-10 |                 11 |
    | 2018-11 |                 14 |
    | 2018-12 |                 12 |
    | 2019-01 |                 13 |
    | 2019-02 |                 10 |
    | 2019-03 |                 23 |
    | 2019-04 |                 12 |
    | 2019-05 |                 11 |
    | 2019-06 |                 12 |
    | 2019-07 |                 14 |
    | 2019-08 |                 17 |
    | 2019-09 |                  8 |
    | 2019-10 |                  6 |
    | 2019-11 |                  4 |
    | 2019-12 |                  9 |
    | 2020-01 |                  5 |
    | 2020-02 |                 11 |
    | 2020-03 |                  3 |
    | 2020-04 |                  6 |
    | 2020-05 |                  5 |
    | 2020-06 |                  4 |
    | 2020-07 |                  4 |
    | 2020-08 |                  2 |
    | 2020-10 |                  1 |
    | 2020-11 |                  1 |
    | 2021-01 |                  5 |
    | 2021-02 |                  3 |
    | 2021-04 |                  4 |
    | 2021-05 |                  4 |
    | 2021-06 |                  3 |
    | 2021-07 |                 12 |
    | 2021-08 |                 22 |
    | 2021-09 |                 24 |
    | 2021-10 |                 47 |
    | 2021-11 |                  7 |
    | 2021-12 |                  1 |
    | 2022-03 |                  1 |
    +---------+--------------------+
:::
:::

::: {.cell .markdown}
Looks like there was a big spike after July 2022. This was when
Coronavirus quarantine and regulations were more relaxed in Seattle and
people were able to enjoy more festive events and activities. My guess
is that people were tired of being cooped up at home for over a year and
a half so now they are eager to go out and socialize.
:::

::: {.cell .code execution_count="8"}
``` {.python}
num_event_per_month = list(num_event_per_month)[-24:]
x = range(len(num_event_per_month))
width = 1/1.5

figure = plt.figure(figsize=(20, 6))

axes = figure.add_subplot(1, 1, 1)
axes.bar(x, [r[1] for r in num_event_per_month], width, align="center")
axes.set_xticks(x)
axes.set_xticklabels([r[0] for r in num_event_per_month])
axes.set_title("Number of Events Per Month")
axes.set_xlabel("Month")
axes.set_ylabel("# of Events")
axes.xaxis.grid(False)

plt.setp(axes.xaxis.get_majorticklabels(), rotation=70)
plt.show()
plt.close();
```

::: {.output .display_data}
![](vertopal_61dafbe3027d49afbc5e28fb4857b6ff/e50f21973d791d6785c4b8a03d4995a8cb05aa8b.png)
:::
:::

::: {.cell .markdown}
Next, I\'m interested to see how many events we have per year and the
number of events we hold per weekday
:::

::: {.cell .code execution_count="9" scrolled="false"}
``` {.python}
num_event_per_year = list(cursor.execute("""select strftime('%Y', event_date), count(*) from event 
    group by strftime('%Y', event_date);"""))
print(tabulate(num_event_per_year, headers=['Year', 'Number of Events'], tablefmt='psql'))

figure = plt.figure(figsize=(15, 6))

axes = figure.add_subplot(1, 1, 1)
axes.plot([r[0] for r in num_event_per_year], [r[1] for r in num_event_per_year])
axes.plot([r[0] for r in num_event_per_year], [r[1] for r in num_event_per_year], 'ro')
plt.axis([-1, 10, -5, 180])
plt.show()
```

::: {.output .stream .stdout}
    +--------+--------------------+
    |   Year |   Number of Events |
    |--------+--------------------|
    |   2013 |                 55 |
    |   2014 |                 60 |
    |   2015 |                 83 |
    |   2016 |                 98 |
    |   2017 |                 39 |
    |   2018 |                165 |
    |   2019 |                139 |
    |   2020 |                 42 |
    |   2021 |                132 |
    |   2022 |                  1 |
    +--------+--------------------+
:::

::: {.output .display_data}
![](vertopal_61dafbe3027d49afbc5e28fb4857b6ff/1cdc4291d66e79f858b399b8b8a555fcc2367005.png)
:::
:::

::: {.cell .markdown}
2020 experienced a low dip most definitely due to the pandemic. The data
(through inspection) preliminarily suggests that most events were online
but rose to face to face interaction starting back in 2021.
:::

::: {.cell .code execution_count="10"}
``` {.python}
num_event_per_weekday = list(cursor.execute("""select strftime('%w', event_date), count(*) from event 
    group by strftime('%w', event_date);"""))
print(tabulate(num_event_per_weekday, headers=['Day of the Week', 'Number of Events'], tablefmt='psql'))
```

::: {.output .stream .stdout}
    +-------------------+--------------------+
    |   Day of the Week |   Number of Events |
    |-------------------+--------------------|
    |                 0 |                278 |
    |                 1 |                 19 |
    |                 2 |                 23 |
    |                 3 |                 43 |
    |                 4 |                 37 |
    |                 5 |                102 |
    |                 6 |                312 |
    +-------------------+--------------------+
:::
:::

::: {.cell .markdown}
No surprise there. Weekends are the most popular days to host events
:::

::: {.cell .code execution_count="11"}
``` {.python}
events = pd.read_sql('SELECT * FROM event', conn)
events.head()
```

::: {.output .execute_result execution_count="11"}
```{=html}
<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>event_id</th>
      <th>status</th>
      <th>event_date</th>
      <th>event_time</th>
      <th>rsvp_count</th>
      <th>waitlist_count</th>
      <th>duration</th>
      <th>venue_lat</th>
      <th>venue_lon</th>
      <th>venue_city</th>
      <th>link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>109370632</td>
      <td>past</td>
      <td>2013-03-22</td>
      <td>19:00</td>
      <td>5</td>
      <td>0</td>
      <td>0.0</td>
      <td>47.681561</td>
      <td>-122.125504</td>
      <td>Redmond</td>
      <td>https://www.meetup.com/1-5GenAsians/events/109...</td>
    </tr>
    <tr>
      <th>1</th>
      <td>109868492</td>
      <td>past</td>
      <td>2013-03-23</td>
      <td>12:30</td>
      <td>6</td>
      <td>0</td>
      <td>0.0</td>
      <td>47.528713</td>
      <td>-121.825394</td>
      <td>Snoqualmie</td>
      <td>https://www.meetup.com/1-5GenAsians/events/109...</td>
    </tr>
    <tr>
      <th>2</th>
      <td>111080172</td>
      <td>past</td>
      <td>2013-03-30</td>
      <td>10:00</td>
      <td>11</td>
      <td>0</td>
      <td>0.0</td>
      <td>47.612015</td>
      <td>-122.198830</td>
      <td>Bellevue</td>
      <td>https://www.meetup.com/1-5GenAsians/events/111...</td>
    </tr>
    <tr>
      <th>3</th>
      <td>111088522</td>
      <td>past</td>
      <td>2013-03-30</td>
      <td>12:00</td>
      <td>3</td>
      <td>0</td>
      <td>0.0</td>
      <td>48.004272</td>
      <td>-122.214149</td>
      <td>Everett 98201</td>
      <td>https://www.meetup.com/1-5GenAsians/events/111...</td>
    </tr>
    <tr>
      <th>4</th>
      <td>110749042</td>
      <td>past</td>
      <td>2013-03-31</td>
      <td>17:00</td>
      <td>8</td>
      <td>0</td>
      <td>0.0</td>
      <td>47.603401</td>
      <td>-122.201317</td>
      <td>Bellevue</td>
      <td>https://www.meetup.com/1-5GenAsians/events/110...</td>
    </tr>
  </tbody>
</table>
</div>
```
:::
:::

::: {.cell .code execution_count="12"}
``` {.python}
events.info()
```

::: {.output .stream .stdout}
    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 814 entries, 0 to 813
    Data columns (total 11 columns):
     #   Column          Non-Null Count  Dtype  
    ---  ------          --------------  -----  
     0   event_id        814 non-null    object 
     1   status          814 non-null    object 
     2   event_date      814 non-null    object 
     3   event_time      814 non-null    object 
     4   rsvp_count      814 non-null    int64  
     5   waitlist_count  814 non-null    int64  
     6   duration        814 non-null    float64
     7   venue_lat       762 non-null    float64
     8   venue_lon       762 non-null    float64
     9   venue_city      762 non-null    object 
     10  link            814 non-null    object 
    dtypes: float64(3), int64(2), object(6)
    memory usage: 70.1+ KB
:::
:::

::: {.cell .markdown}
We need to make a few modifications. Event ID should really be an int64
but string is fine too, there won\'t be much to analyze on this property
so we can just leave it alone. Status tells us whether the event was in
the past or upcoming, we don\'t need this information. The venue city
and event time should be categorial. Duration is expressed in terms of
milliseconds. We will want to convert this to hours. Finally, the links
can be useful to redirect to the Meetup page but not so much for
analysis so let\'s remove that as well.
:::

::: {.cell .code execution_count="13"}
``` {.python}
events['event_id'] = events['event_id'].astype('str')
events['venue_city'] = events['venue_city'].astype('category')
events['event_time'] = events['event_time'].astype('category')
events = events.drop('status', 1)
events = events.drop('link', 1)
events['duration'] = events['duration'] / 3600000
events.info()
```

::: {.output .stream .stdout}
    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 814 entries, 0 to 813
    Data columns (total 9 columns):
     #   Column          Non-Null Count  Dtype   
    ---  ------          --------------  -----   
     0   event_id        814 non-null    object  
     1   event_date      814 non-null    object  
     2   event_time      814 non-null    category
     3   rsvp_count      814 non-null    int64   
     4   waitlist_count  814 non-null    int64   
     5   duration        814 non-null    float64 
     6   venue_lat       762 non-null    float64 
     7   venue_lon       762 non-null    float64 
     8   venue_city      762 non-null    category
    dtypes: category(2), float64(3), int64(2), object(2)
    memory usage: 50.3+ KB
:::
:::

::: {.cell .markdown}
# Exploratory Data Analysis (EDA)
:::

::: {.cell .markdown}
## Single Variable Exploration

Let\'s begin our single variable exploration first and then analyze the
pairwise relationships!
:::

::: {.cell .markdown}
#### Event Time
:::

::: {.cell .code execution_count="14"}
``` {.python}
print(pd.DataFrame(events.event_time.value_counts().sort_index()))
ax = events.event_time.value_counts().sort_values().tail(10).plot.bar(figsize=(20,10),rot = 0)
ax.set_ylabel("Count")
ax.set_xlabel("Event Time")
ax.grid(axis='x')
```

::: {.output .stream .stdout}
           event_time
    00:00           3
    03:00           1
    05:00           1
    06:30           3
    07:00           4
    ...           ...
    20:45           1
    21:00           5
    21:15           1
    22:00           1
    23:59           1

    [74 rows x 1 columns]
:::

::: {.output .display_data}
![](vertopal_61dafbe3027d49afbc5e28fb4857b6ff/4c47a06ef548ace0fe2d4a1d5ccb5846990917a2.png)
:::
:::

::: {.cell .code execution_count="15" scrolled="true"}
``` {.python}
events.event_time.describe()
```

::: {.output .execute_result execution_count="15"}
    count       814
    unique       74
    top       18:00
    freq         71
    Name: event_time, dtype: object
:::
:::

::: {.cell .markdown}
6 PM seems to be the most common time to host events. Event time may be
a good indicator of a variable for linear regression in the later part.
:::

::: {.cell .markdown}
#### RSVP
:::

::: {.cell .code execution_count="16"}
``` {.python}
figure = plt.figure(figsize=(10, 6))
axes = figure.add_subplot(1, 1, 1)
axes.hist(events.rsvp_count)
axes.set_title("Distribution of RSVP")
axes.set_xlabel("RSVP")
axes.set_ylabel("Counts")
axes.grid(axis='x')
plt.show()
plt.close()
```

::: {.output .display_data}
![](vertopal_61dafbe3027d49afbc5e28fb4857b6ff/2c1958280b0e12f86c0866b06882cd033f39fe0d.png)
:::
:::

::: {.cell .code execution_count="17" scrolled="true"}
``` {.python}
events.rsvp_count.describe()
```

::: {.output .execute_result execution_count="17"}
    count    814.000000
    mean      10.968059
    std       10.296775
    min        1.000000
    25%        6.000000
    50%        9.000000
    75%       12.000000
    max      109.000000
    Name: rsvp_count, dtype: float64
:::
:::

::: {.cell .markdown}
Looks like most reservations are between 1 to 30. There appears to be
some big events that host up to 90 members.
:::

::: {.cell .markdown}
#### Waitlist Count
:::

::: {.cell .code execution_count="18"}
``` {.python}
figure = plt.figure(figsize=(10, 6))
axes = figure.add_subplot(1, 1, 1)
axes.hist(events.waitlist_count)
axes.set_title("Distribution of Waitlist")
axes.set_xlabel("Waitlist")
axes.set_ylabel("Counts")
axes.grid(axis='x')
plt.show()
plt.close()
```

::: {.output .display_data}
![](vertopal_61dafbe3027d49afbc5e28fb4857b6ff/067598c8f5977e8095c862dc46c83872651e9874.png)
:::
:::

::: {.cell .code execution_count="19" scrolled="true"}
``` {.python}
events.waitlist_count.describe()
```

::: {.output .execute_result execution_count="19"}
    count    814.000000
    mean       0.108108
    std        0.853678
    min        0.000000
    25%        0.000000
    50%        0.000000
    75%        0.000000
    max       13.000000
    Name: waitlist_count, dtype: float64
:::
:::

::: {.cell .markdown}
Almost every event is accounted as there doesn\'t seem to be much of any
waitlist. This is not a good variable for analysis for our linear model
later.
:::

::: {.cell .markdown}
#### Venue City
:::

::: {.cell .code execution_count="20"}
``` {.python}
print(pd.DataFrame(events.venue_city.value_counts().sort_index()))

# Sort venue cities by the count and then sort before plotting top 10 most frequented cities
ax = events.venue_city.value_counts().sort_values().tail(10).plot.bar(figsize=(20,10),rot = 0)
ax.set_ylabel("Count")
ax.set_xlabel("City")
ax.grid(axis='x')
```

::: {.output .stream .stdout}
                                 venue_city
    Auburn                                1
    Beijing                               1
    Bellevue                            228
    Bellevue                              6
    Berlin                                1
    Bothell                               3
    Burien                                1
    Edmonds                               5
    Everett                               3
    Everett 98201                         1
    Federal Way                           6
    Gold Bar                              3
    Index                                 1
    Issaquah                             28
    Kenmore                               1
    Kent                                  1
    Kirkland                             47
    Kirkland                              1
    Lake Forest Park                      1
    Lynnwood                              6
    Marysville                            1
    Mercer Island                         4
    Monroe                                2
    Mount Vernon                          1
    Mountlake Ter                         1
    Mukilteo                              3
    North Bend                            1
    North Bend                            1
    Picnic Point-North Lynnwood           1
    Redmond                              52
    Redmond,                              1
    Renton                                1
    Sammamish                             1
    Seattle                             314
    Seattle                               4
    Shoreline                             1
    Skykomish                             1
    Snohomish                             3
    Snohomish,  98296                     1
    Snoqualmie                            1
    Snoqualmie Pass                       2
    Tacoma                                2
    Tukwila                               7
    Tukwila                               1
    Woodinville                           7
    renton                                1
    seattle                               2
:::

::: {.output .display_data}
![](vertopal_61dafbe3027d49afbc5e28fb4857b6ff/eaa48d077dc971e39be6fa378948b38cdc9152c1.png)
:::
:::

::: {.cell .markdown}
Bellueve and Seattle are the happening cities to host events! It\'ll be
interesting to apply Random Forest technique on this variable.
:::

::: {.cell .markdown}
#### Duration
:::

::: {.cell .code execution_count="21"}
``` {.python}
figure = plt.figure(figsize=(10, 6))
axes = figure.add_subplot(1, 1, 1)
axes.hist(events.duration)
axes.set_title("Distribution of RSVP")
axes.set_xlabel("RSVP")
axes.set_ylabel("Counts")
axes.grid(axis='x')
plt.show()
plt.close()
```

::: {.output .display_data}
![](vertopal_61dafbe3027d49afbc5e28fb4857b6ff/0032eeb96375f296b6140dfcc4a03fd74e699104.png)
:::
:::

::: {.cell .code execution_count="22"}
``` {.python}
events.duration.describe()
```

::: {.output .execute_result execution_count="22"}
    count    814.000000
    mean       2.474918
    std        2.740083
    min        0.000000
    25%        1.000000
    50%        2.000000
    75%        3.000000
    max       38.500000
    Name: duration, dtype: float64
:::
:::

::: {.cell .markdown}
## Pairwise Relationships
:::

::: {.cell .markdown}
Because my questions revolve around the popularity of the events, the
variable of interest to compare with is going to be the count of the
reservations.
:::

::: {.cell .markdown}
#### RSVP versus Cities

Let\'s revisit some of the most common venues of the events.
:::

::: {.cell .code execution_count="23"}
``` {.python}
print(pd.DataFrame(events.venue_city.value_counts().sort_values().tail(10)))
```

::: {.output .stream .stdout}
                 venue_city
    Lynnwood              6
    Bellevue              6
    Federal Way           6
    Woodinville           7
    Tukwila               7
    Issaquah             28
    Kirkland             47
    Redmond              52
    Bellevue            228
    Seattle             314
:::
:::

::: {.cell .code execution_count="24"}
``` {.python}
grouped_by_sex = events.groupby("venue_city")

figure = plt.figure(figsize=(10, 6))

axes = figure.add_subplot(1, 1, 1)
labels = ["Seattle","Issaquah","Kirkland","Redmond","Bellevue"]
grouped_data = [grouped_by_sex["rsvp_count"].get_group(k) for k in labels]
patch = axes.boxplot(grouped_data, labels=labels)
axes.set_xlabel("City")
axes.set_ylabel("RSVP")
axes.set_title("RSVP versus City")

plt.show()
plt.close()
```

::: {.output .display_data}
![](vertopal_61dafbe3027d49afbc5e28fb4857b6ff/76a02ce93fff5cc902a7d0da5e86fd16d62b8ad8.png)
:::
:::

::: {.cell .markdown}
Wow, Bellevue has higher ranges than the other top 4 cities.

#### RSVP versus Event Duration
:::

::: {.cell .code execution_count="25"}
``` {.python}
sns.jointplot(data=events, x = "duration", y = "rsvp_count", kind="hex", height=10)
```

::: {.output .execute_result execution_count="25"}
    <seaborn.axisgrid.JointGrid at 0x13fd19010a0>
:::

::: {.output .display_data}
![](vertopal_61dafbe3027d49afbc5e28fb4857b6ff/7846167e45f86a8f934cf1f2f85b5fced4ca040f.png)
:::
:::

::: {.cell .markdown}
There is no correlation between the duration of the event and the number
of reservations. This suggests that members don\'t necessarily click on
the Attend button based on how long the events are!
:::

::: {.cell .markdown}
#### RSVP versus Event Time
:::

::: {.cell .code execution_count="26"}
``` {.python}
figure = plt.figure(figsize=(18, 6))

axes = figure.add_subplot(1, 1, 1)
axes.scatter(events.event_time, events.rsvp_count, marker="o")

axes.set_ylabel("RSVP")
axes.set_xlabel("Time")
axes.set_title("Scatter Plot of Time vs. RSVP")
plt.xticks(rotation = 90) 
plt.show()
plt.close()
```

::: {.output .display_data}
![](vertopal_61dafbe3027d49afbc5e28fb4857b6ff/29d9b2ec24c538eb66c05ba13193efb96b23b203.png)
:::
:::

::: {.cell .markdown}
We might need to use more sophisticated modeling techniques.
:::
