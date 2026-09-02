AZIZ OLAIDE KAFAYAT
FRONTEND TRACK (TECHYJAUNT)


Frontend Development Week 1 Assignment


Part 1: Environment Setup

Step 1: Install Visual Studio Code
I went to code.visualstudio.com and downloaded the version for my operating system. I opened the installer and followed the prompts to install it. [NB: I already had VSCODE installed.]

<img width="1791" height="1116" alt="Screenshot 2026-08-22 at 11 31 17" src="https://github.com/user-attachments/assets/c745ebe7-229d-4c5c-bc36-6c99425c4370" />


Step 2: Customize the color theme
I opened VS Code and pressed Cmd + Shift + P (or Ctrl + Shift + P on Windows) to open the command palette. I typed 'Color Theme' and pressed Enter. I used the arrow keys to preview different themes and picked the one I liked best which is pink.

<img width="1792" height="1120" alt="vs code" src="https://github.com/user-attachments/assets/2d81f5a2-679e-4229-b1e3-91774dba5a98" />


Step 3: Install a modern browser
I confirmed I already had Chrome installed, or downloaded it from google.com/chrome.

<img width="1792" height="1120" alt="google chrome interface" src="https://github.com/user-attachments/assets/a836af1c-4ee2-445e-9563-2f3fa5acbf6d" />


Step 4: Create the week-1 folder
I opened Terminal and created a folder called week-1 on my Desktop using: mkdir ~/Desktop/week-1
Inside that folder, I created two text files: Part2.txt and Part3.txt using: touch Part2.txt Part3.txt


<img width="865" height="505" alt="files" src="https://github.com/user-attachments/assets/d8e42366-b0e2-4082-a08b-af3a1a620e82" />


Part 2: Research and Reflection

The websites and web applications I use regularly include Gmail, Notion, my banking app, Twitter/X, and my own business website, brownsdigitalconsult.com, which I built for my consulting brand, Browns Digital Consult (BDC).

I chose my own site as my example of good design since I know it inside and out. What makes it effective from a user's perspective is how clearly it communicates what BDC does within the first few seconds of landing on the page. The homepage leads straight into a clear statement of what we do, done for you operational transformation, followed by real case studies with actual numbers attached, like a client who recovered 420,000 naira a month after we deployed a system for them. 

That specificity builds trust immediately instead of relying on vague marketing language. The site also breaks services into clear tiers with pricing ranges, so a visitor never has to guess what something costs or what they get. Little things like the cookie consent banner, the newsletter signup, and consistent navigation across pages also show attention to detail that makes the whole experience feel trustworthy and professional.

<img width="1783" height="1062" alt="bdc website" src="https://github.com/user-attachments/assets/61738acb-42bd-4091-be62-1b2c13aacfee" />


By the end of this cohort, I am not entirely sure yet what specific project I want to build, and I am okay with that. I want to stay open and let my interests guide me as I learn, rather than forcing a direction too early.
Honestly, I am excited about everything in frontend development. I love research and picking up new skills, so I am looking forward to all of it, HTML, CSS, JavaScript, all of it. If I am nervous about anything, it is keeping up with the pace of the cohort, since I am juggling this alongside other things I am currently studying. But I am used to learning multiple things at once, so I am confident I will find my rhythm.

Part 3: Exploration Exercise

I inspected three websites using Chrome DevTools by right clicking on the page and selecting Inspect. I spent about ten minutes on each one clicking through the elements panel.

Site 1: brownsdigitalconsult.com

What stood out immediately was how component based the structure felt, even though I was only looking at rendered HTML. Sections like the case studies and the pricing tiers were wrapped in repeating patterns of divs with similar class names, which told me the site was likely built using a modern framework rather than plain static HTML. I also noticed meta tags in the head section for things like Open Graph images and Twitter card data, which control how the page looks when shared on social media. Seeing my own site from this angle made me appreciate the work that goes on behind a page that looks simple on the surface.

<img width="1786" height="1081" alt="bdc inspect" src="https://github.com/user-attachments/assets/81066f72-f14f-4eba-a3e0-0ca256063203" />


Site 2: Gmail

This one was much harder to read through. The class names were short and machine generated rather than descriptive, which I now understand is common for large applications that go through a build process that compresses code for performance. I did notice a lot of nested divs and aria labels, which are used to help screen readers describe elements to visually impaired users, so accessibility was clearly considered even if the structure itself looked dense and complicated.

<img width="1787" height="1071" alt="Gmail inspect" src="https://github.com/user-attachments/assets/9258bf60-977c-4243-ba1c-8da15d4ca1dc" />


Site 3: Notion

What I found most interesting here was how the entire page seemed to be built from a small number of repeating block elements, which makes sense since Notion is designed around the idea of everything being a flexible block you can rearrange. I also came across contenteditable attributes on some elements, which is the trick that allows you to click anywhere on a Notion page and start typing directly into it.

<img width="1792" height="1080" alt="notion inspect" src="https://github.com/user-attachments/assets/456d73e9-24aa-495a-8112-43569079b8b0" />

