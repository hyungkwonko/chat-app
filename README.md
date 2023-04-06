# ExGPTer

Moderating Customer Inquiries and Responses to Alleviate Stress and Reduce Emotional Dissonance of Customer Service Representatives


## Abstract
Customer service representatives (CSRs) face significant levels of stress as a result of handling disrespectful customer inquiries and the emotional dissonance that arises from concealing their true emotions to provide the best customer experience. To solve this issue, we propose ExGPTer that uses ChatGPT to moderate the tone and manner of a customer inquiry to be more gentle and appropriate, while ensuring that the content remains unchanged. ExGPTer also augments CSRs' responses to answer customer inquiries, so they can conform to established company protocol while effectively conveying the essential information that customers seek.


## Run Application

### Run Backend
```
1. Create virtual environment `conda create -n chatapp`
2. Activate it `conda activate chatapp`
3. Move directory to server/ and install dependencies `pip install -r requirements.txt`
4. Run database migration `python manage.py migrate`
5. Run server `python manage.py runserver`
```

### Run Front-end
```
1. Move to clients/
2. Install dependencies `npm install`
3. Start the server `npm start`
```

## Credits
django-chat  
https://github.com/abdurraufraihan/django-chat  
Copyright (c) 2021 Abdur Rauf Raihan  
License (MIT) https://github.com/abdurraufraihan/django-chat/blob/main/LICENSE