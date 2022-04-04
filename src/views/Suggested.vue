<template>
  <div class="carousel-wrapper">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title" style="color:black;">You may like these...</h1>
            <h4 class="title" style="color:black;">
              Fully customized day trip based on your interests
            </h4>
            <br />
            <md-button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              class="md-success md-lg"
              target="_blank"
              ><i class="fa fa-play"></i> Generate</md-button
            >
          </div>
        </div>
      </div>
    </div>
    <div class="md-layout" md-alignment="centered">
      <div class="md-layout-item md-size-100 md-small-size-100">
        <tabs
          :tab-name="['Food', 'Activities', 'Events']"
          :tab-icon="['restaurant_menu', 'rowing', 'theater_comedy']"
          plain
          nav-pills-icons
          color-button="primary"
          md-alignment="centered"
        >
          <!-- here you can add your content for tab-content -->
          <template slot="tab-pane-1">
            <div id="border-wrapper">
              <h1>Food</h1>
              <div id="border"></div>
            </div>
            <br /><br />
            <div class="flex-container">
              <SuggestedCard
                @added="change"
                v-for="item in this.foodItems"
                :key="item.key"
                :image="item.image"
                :name="item.name"
                :address="item.address"
                :category="item.category"
                :price="item.price"
                :openinghours="item.openinghours"
              ></SuggestedCard>
            </div>
          </template>
          <template slot="tab-pane-2">
            <div id="border-wrapper">
              <h1>Activities</h1>
              <div id="border"></div>
            </div>
            <br /><br />
            <div class="flex-container">
              <SuggestedCard
                @added="change"
                v-for="item in this.activityItems"
                :key="item.key"
                :image="item.image"
                :name="item.name"
                :address="item.address"
                :category="item.category"
                :price="item.price"
                :openinghours="item.openinghours"
              ></SuggestedCard>
            </div>
          </template>
          <!-- <template slot="tab-pane-3">
            <div id="border-wrapper">
              <h1>Events</h1>
              <div id="border"></div>
            </div>
            <br /><br />
            <div class="flex-container">
              <SuggestedCard
                @added="change"
                v-for="item in this.items"
                :key="item.key"
                :image="item.image"
                :name="item.name"
                :address="item.address"
                :category="item.category"
              ></SuggestedCard>
            </div>
          </template> -->
        </tabs>
      </div>
    </div>
  </div>
</template>

<script>
import firebaseApp from "../firebase.js";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, query, where } from "firebase/firestore";
import SuggestedCard from "@/views/components/SuggestedCard.vue";
import { Tabs } from "@/components";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getFirestore(firebaseApp);

export default {
  name: "Carousel",
  components: {
    SuggestedCard,
    Tabs
    // tabs,
    // tabItem
  },
  data() {
    return {
      foodItems: [],
      activityItems: [],
      foodData: [
      {
      "objectID": "RS0001",
      "restaurantname": "1 Tyrwhitt Bistro Bar",
      "description": "With an industrial chic vibe, black and white decor, and clean lines greeting diners, 1 Tyrwhitt Bistro & Bar is savoury Italian dining done right. Don’t expect all the gimmicky frills other Italian restaurants bring because this place is about two things: the food and the drinks. So what you can expect, and should totally look forward to, is delicious hand-tossed, thin crust pizzas crisped to perfection (the Black Truffle Egg Pizza is a must-try), authentic, home-made pastas, and a wine list that’ll beckon you for days!",
      "district": "East",
      "location": "Jalan Besar",
      "address": "1 Tyrwhitt Road S207522",
      "openinghours": "Wed-Mon, 11:30-00:00, Closed on Tuesday",
      "category": "Italian",
      "image":"https://static.chope.co/uploads/2015/08/s-725x360x80xo_Interior_jpg_1439873911.jpg?date=20220315074305",
      "price": "⭐️⭐️⭐️",
      "preferences": ["Romantic", "Social", "Chill", "Western"],
      "website": "https://www.chope.co/singapore-restaurants/restaurant/one-tyrwhitt-bistro-bar"
      },
      {
      "objectID": "RS0002",
      "restaurantname": "5 ON 25 五悦亭",
      "description": "Savour refined Cantonese cuisine in a modern upscale setting that is a sophisticated mix of romance and nostalgia. Ideal for intimate dining sessions is two private dining suites, which seat 12 and 8.",
      "district": "Central",
      "location": "Bugis",
      "address": "5 Fraser Street, Level 25, Andaz Singapore S189354",
      "openinghours": "Tue-Sun: 12-2:30pm, 6-10:30pm (Last Order: 9:45pm), Closed Monday",
      "category": "Chinese",
      "image":"https://static.chope.co/uploads/2021/12/s-725x360x80xo_1640770972_28705.jpg?date=20220315074305",
      "price": "⭐️⭐️⭐️",
      "preferences": ["Arts & Culture", "Family", "Asian"],
      "website": "https://www.5on25.com/"
      },
      {
      "objectID": "RS0003",
      "restaurantname": "10 SCOTTS",
      "description": "Located on the lobby level, 10 SCOTTS exudes an aura of elegance and relaxation with its contemporary yet classic décor. 10 SCOTTS, one of the few restaurants in Singapore with an address that is perfect for that business coffee meeting, afternoon high tea or leisurely evening cocktail amidst home-like space that exudes luxury.",
      "district": "Central",
      "location": "Orchard",
      "address": "10 Scotts Road, Lobby Level, Grand Hyatt Singapore S228211",
      "openinghours": "Mon-Sun: 12-5pm, 6-10pm",
      "category": "Japanese",
      "image":"https://static.chope.co/uploads/2015/05/s-725x360x80xo_10_Scotts_Entrance_jpg_1430907978.jpg?date=20220315074305",
      "price": "⭐️⭐️⭐️",
      "preferences": ["Chill", "Arts & Culture", "Social", "Romantic"],
      "website": "https://www.chope.co/singapore-restaurants/restaurant/10-scotts"
      },
      {
      "objectID": "RS0004",
      "restaurantname": "13% Wine Bistro @ Telok Ayer",
      "description": "13% Wine Bistro was founded on a shared love of fine wine, great food, and the unpretentious atmosphere of vineyards across Europe. Snugly nestled on the second floor, simple furniture and walls loaded with frames fade into the background as the enormous chalkboard panel listing specials and recommendations draws your attention. Warm bulbs and aqua lights tracking along the 8-metre mosaic bar set a cosy scene whilst diners peruse the special Iberico and cheese counter, or take their seats and eagerly await the delicious parade of contemporary European cuisine and international wines to come.",
      "district": "Central",
      "location": "Telok Ayer",
      "address": "123A Telok Ayer Street S068592",
      "openinghours": "Mon-Fri: 12-11pm, Sat: 5-11pm, Closed Sunday",
      "category": "European",
      "image":"https://static.chope.co/uploads/2021/04/s-725x360x80xo_1618472835_78757.jpg?date=20220315074305",
      "price": "⭐️⭐️⭐️",
      "preferences": ["Arts & Culture", "Social", "Chill", "Western"],
      "website": "https://www.chope.co/singapore-restaurants/restaurant/13-wine-bistro-telok-ayer"
      },
      {
      "objectID": "RS0005",
      "restaurantname": "1864",
      "description": "History breathes beneath the floorboards and inside the walls of this beautiful bar at the Sofitel smack in the middle of the Central Business District. As a nod to the rich maritime history of the area around the hotel, this luxe bar was named 1864 after the year the historic Tanjong Pagar Dock Company was founded, and it evokes equal parts modern luxury and old-world glamour. In the day, it is a breakfast and tea lounge, serving up eggs, Viennoiseries, coffee, and high-tea platters. At lunchtime, treat yourself to tapas with a French-Asian profile, think spicy Scallop Brochette, ikura-studded Salmon Crostini, and smoky Kurobuta Pork Yakitori served up with cold soba noodles. By the night-time, all the good vibes come together to turn the space into a sexy wine and cocktail bar, serving hotel guests alongside the city’s swanky barflies, turning out barrel-aged cocktails and premium wines faster than you can say “martini”. The signatures here include a regal Cognac Old Fashioned, the Martinez, a forgotten classic made with gin and cherry liqueur, and a cheeky Coconut Negroni that puts a Singapore spin on the international favourite. Luxury, elegance, and a quiet spot to while away the day: they don’t often make hotels like this anymore, steeped in old-world charm and flawless hospitality.",
      "district": "Central",
      "location": "Tanjong Pagar",
      "address": "9 Wallich Street, Sofitel Singapore City Centre S078885",
      "openinghours": "Mon-Sun: 8am-10pm",
      "category": "Bar",
      "image":"https://static.chope.co/uploads/2017/11/s-725x360x80xo_1864_Old_Fashioned_Cocktail_jp_1511425973.jpg?date=20220315074305",
      "price": "⭐️⭐️⭐️⭐️",
      "preferences": ["Arts & Culture", "Social", "Romantic", "Adventure"],
      "website": "https://www.chope.co/singapore-restaurants/restaurant/1864"
      },
      {
      "objectID": "RS0006",
      "restaurantname": "21 on Rajah",
      "description": "Explore the different combination of flavours with 21 on Rajah unique spread of Mediterr-Asian Buffet. Indulge in familiar street delicacies while exploring Mediterranean’s exotic flavours. Think a rijsttafel (rice table)-inspired sumptuous buffet spread filled with Mediterranean favourites such as Traditional Greek Salad with Marinated Feta Cheese and Black Olives, Grilled Lamb Chop with Garlic-Mint Sauce and Eggplant, Okra and Tomato Tagine. In additional to the ice crustacean bar and the carving station serving the restaurant's signatures NZ Prime Beef Rib-Eye with 21 On Rajah Signature Homemade Sauces and Slow-Cooked Salted Salmon in Tamarind Sauce, there is a new station featuring items such as Seafood and Chicken Paella, Tortilla de Patatas Espanola (Spanish Omelette with Potatoes) and assorted pizzas.",
      "district": "Central",
      "location": "Balestier",
      "address": "1 Jalan Rajah S329133",
      "openinghours": "Mon-Sun: 6am-10:30pm",
      "category": "Mediterranean",
      "image":"https://static.chope.co/uploads/2022/03/s-725x360x80xo_1646369269_56251.jpeg?date=20220315074305",
      "price": "⭐️⭐️",
      "preferences": ["Arts & Culture", "Adventure", "Asian", "Mediterranean", "Social"],
      "website": "https://www.21onrajah.com/"
      },
      {
      "objectID": "RS0007",
      "restaurantname": "9th ave.",
      "description": "Filled with so much goodness, our croissant packed with smoked salmon, egg mayo and greens. Accompanied with a side of hearty granola yoghurt and potato, mushroom cheese gratin. Complement it with our specially curated beverages to provide you with various options, it will give you the boost of energy to keep you moving throughout the day!",
      "district": "North",
      "location": "Woodlands",
      "address": "43 Woodlands Avenue 9, SIT@RP S737729",
      "openinghours": "Mon-Fri: 8am-4:30pm, Closed Saturday, Sunday & PH",
      "category": "Western",
      "image":"https://static.chope.co/uploads/2021/11/s-725x360x80xo_1637114747_40052.jpg?date=20220315074305",
      "price": "⭐️⭐️",
      "preferences": ["Arts & Culture", "Adventure", "Cafe", "Chill"],
      "website": "https://www.chope.co/singapore-restaurants/restaurant/9th-ave"
      },
      {
      "objectID": "RS0008",
      "restaurantname": "2D1N Soju Bang",
      "description": "At 2D1N, the focus is on authentic, homely Korean cuisine. The Ginseng Chicken Soup, for instance, is a comforting dish featuring a plump, tender chicken simmered in a nourishing broth infused with slices of spiced ginger and spring onions.",
      "district": "Central",
      "location": "Tanjong Pagar",
      "address": "44/46 Tanjong Pagar Road S088467",
      "openinghours": "Tue-Sun: 11:30am-2:30pm, 5pm-12am, Closed Monday",
      "category": "Korean",
      "image":"https://static.chope.co/uploads/2019/10/s-725x360x80xo_SG_2D1N_Soju_Bang_Rib_Eye_Set__1572432690.jpg?date=20220315074305",
      "price": "⭐️⭐️",
      "preferences": ["Asian", "Family", "Social"],
      "website": "https://www.chope.co/singapore-restaurants/restaurant/2d1n-soju-bang"
      },
      {
      "objectID": "RS0009",
      "restaurantname": "49 Seats",
      "description": "A savoury twist to Singapore's food scene focused on affordable but quality experience, 49 Seats has been in the F&B industry since 2012 and has established a strong local presence. It is recognised for its fusion style meals with a slight twist of local flavour. 49 Seats, the pioneer of Tom Yum Pasta as well as Fish and Chips with Tom Yum Sauce in Singapore, is our go-to for foods full of spicy and savoury flavours. Apart from their groundbreaking tom yum dish, 49 Seats is also famous for their Creamy Smoked Duck Pasta, which is one of the most popular smoked duck dishes on the market. Founded on the belief of creating a fun and friendly environment, 49 Seats offers a casual dining experience that continues to serve quality food to the guest's heart. With a price that is comfortably affordable to all, customers get to enjoy their fusion food at any time of the day. ",
      "district": "Central",
      "location": "Orchard",
      "address": "176 Orchard Road #01-49, The Centrepoint S238843",
      "openinghours": "Mon-Thu: 11:30am-3:30pm, 5:30-11:30pm, Fri-Sun: 11:30am-4pm, 5-11:30pm",
      "category": "Western",
      "image":"https://static.chope.co/uploads/2018/03/s-725x360x80xo_Tom_Yam_Pasta_final_jpg_1522035178.jpg?date=20220315074305",
      "price": "⭐️⭐️",
      "preferences": ["Asian", "Chill", "Family"],
      "website": "https://www.chope.co/singapore-restaurants/restaurant/49-seats"
      },
      {
      "objectID": "RS0010",
      "restaurantname": "5 Senses Bistro (Funan Mall)",
      "description": "Following the philosophy that good food can also be affordably priced, 5 Senses Bistro serves up comfort dishes, reminiscent of mama’s cooking. The kitchen team takes pride in the food they cook, as seen from the attention to detail — Carbonara, for instance, an all time favourite pasta dish with slivers of juicy bacon, cook to al dente, precise 62°C poached egg finishing off with freshly grated parmesan cheese. The restaurant’s signature dish, Confit French Duck Leg & Pan Seared Norwegian Salmon, are also a delight to tuck into. For a heartier, full bodied main course, try the 150 Days Grain-Fed Angus Braised Beef Cheek. The beef is cooked for long hours so that the meat is meltingly soft and fork-tender, suffused with a rich, heady flavour from the gravy. Be sure to save some space for dessert. Classics like the Apple Crumble and a delicious, warm Chocolate Lava Cake are sweet comforts to indulge in at the end of the meal.",
      "district": "Central",
      "location": "City Hall",
      "address": "107 North Bridge Road #02-17, Funan Mall S179105",
      "openinghours": "Mon-Sun: 11am-9pm",
      "category": "European",
      "image":"https://static.chope.co/uploads/2019/07/s-725x360x80xo_SG_5_Senses_Bistro_Chocolate_L_1564483466.jpg?date=20220315074305",
      "price": "⭐️⭐️",
      "preferences": ["Asian", "Chill", "Family", "Cafe", "Western"]
      "website": "https://www.5sensesbistrosg.com/"
      },
      {
      "objectID": "RS0011",
      "restaurantname": "Acid Bar",
      "description": "Centrally situated at the front of Emerald Hill, Acid Bar has two seating areas for you to choose from. Whether you want to people-watch or enjoy a more intimate setting, we're here for you! Gracing the kitchens is Executive Chef Kar Meng who is a graduate of Le Cordon Bleu Culinary Institute in Sydney, Australia. Beginning his culinary career in Melbourne, Chef Meng has since then graced the kitchens of restaurants like Red Tail Bar by Zouk, Chinoiserie and 1-Michelin starred restaurant, Jag. He now helms the kitchen at Acid Bar, so be sure to pop by for the ultimate dining experience. Local delights on the menu include Har Cheong Kai and Sate. The latter is served up with peanut sauce and affords you the option of either chicken or beef skewers that are grilled and seasoned to perfection. Be sure to also give the “No Rice Paper” Roll a try! Topped with fresh passionfruit, generous slices of fresh Japanese swordfish are tightly wrapped up in coral lettuce and ohba leaf with guava and aloe vera to plate up this savoury dish.",
      "district": "Central",
      "location": "Orchard",
      "address": "180 Orchard Road S238843",
      "openinghours": "Mon-Sun: 3:00pm-10:30pm",
      "category": "American",
      "image":"https://static.chope.co/uploads/2021/06/s-725x360x80xo_1624606745_41504.jpg?date=20220315074305",
      "price": "⭐️⭐️",
      "preferences": ["Western", "Chill", "Social", "Romantic"],
      "website": "https://www.acidbar.sg/"
      },
      {
      "objectID": "RS0012",
      "restaurantname": "Acoustics Coffee Bar",
      "description": "Acoustics Coffee is guided by the simplicity of providing a restorative safe space for customers. They infuse quality and natural ingredients into their menu and provide a “sound” environment for relaxation and conversation over coffee and food. Serving all-day brunch, go for their Breakfast at Acoustics for a taste of all their best breakfast offerings, including maple glazed bacon. For the sweet tooth, have a go at their signature Acoustics Pancakes, generously adorned with nutty crumble and fresh banana slices that are guaranteed to fill you up. Acoustics also offers a dinner menu from 5pm to 9pm every Friday and Saturday, so if you’re in the area, do pop by to enjoy indulgent dishes like their saucy Chilli Crab Pasta and Mint Pesto Steak. A must try is their Grilled Baby Back Ribs that are deliciously sous vide for 12 hours, giving them a delightfully tender bite and smoky flavor. Or go for something fusion, the Laksa Cream Pasta that gives local flavours a different take. If you can’t get enough of their Laksa Cream Pasta, you can order their Crispy Tofu Puff stuffed with laksa chicken on the side to indulge your laksa fix.",
      "district": "South",
      "location": "Outram",
      "address": "61 Neil Road S088895",
      "openinghours": "Sun-Thu: 8:30am-5:30pm, Fri-Sat: 8:30am-9:30pm",
      "category": "Western",
      "image":"https://static.chope.co/uploads/2022/02/s-725x360x80xo_1643857106_48114.jpg?date=20220315074305",
      "price": "⭐️⭐️",
      "preferences": ["Western", "Chill", "Social", "Cafe"],
      "website": "https://acousticscoffee.com/"
      },
      {
      "objectID": "RS0013",
      "restaurantname": "Al Forno Tapas & Wine Bar",
      "description": "With all the Italian options in Singapore, it's no wonder the competition is stiff enough to see many a restaurant come and go, but Al Forno has stood the test of time and tastiness with a beautifully simple philosophy. Take the freshest Italian ingredients, make dishes that people know and love, and the diners will come. And while it's now a common claim to source ingredients like vine ripened whole tomatoes and peppery parmigiana directly from Italy, Al Forno was the first to do so, with exclusive imports since 1995. That means the dishes here have been tasted, tweaked and perfected so that you can't go wrong with anything on the diligently genuine, yet approachable menu.",
      "district": "East",
      "location": "East Coast",
      "address": "693A East Coast Road S459058",
      "openinghours": "Mon-Thu: 5-10:30pm, Fri-Sat: 3-10:30pm, Sun: 12-10pm",
      "category": "Italian",
      "image":"https://static.chope.co/uploads/2018/08/s-725x360x80xo_SG_Al_Forno_Tapas_Wine_Bar_Al__1533825951.jpg?date=20220315074305",
      "price": "⭐️⭐️",
      "preferences": ["Western", "Chill", "Social", "Romantic"],
      "website": "https://alfornoeastcoast.com.sg/"
      },
      {
      "objectID": "RS0014",
      "restaurantname": "Amber West",
      "description": "Amber West, a student operated restaurant, brings affordable gourmet selections prepared by student chefs and served by student servers, to those who visit the in-house fine dining training restaurant, located right in the heart of ITE College West’s vast campus at Choa Chu Kang. The restaurant serves to train students in an authentic learning environment at affordable prices and features a tantalising collection of dishes, both Western and Asian cuisine with a twist. Specialising in Asian and Western cuisine, the restaurant serves up four course meals that will definitely get you bang for your buck.",
      "district": "West",
      "location": "Choa Chu Kang",
      "address": "1 Choa Chu Kang Grove S688236",
      "openinghours": "Mon: 12-2pm, Tue-Fri: 12-2pm, 6-8pm, Closed Saturday & Sunday",
      "category": "Western",
      "image":"https://static.chope.co/uploads/2022/01/s-725x360x80xo_1642127485_29013.jpg?date=20220315074305",
      "price": "⭐️⭐️",
      "preferences": ["Western", "Chill", "Social", "Family", "Cafe"],
      "website": "https://www.chope.co/singapore-restaurants/restaurant/amber-west"
      },
      {
      "objectID": "RS0015",
      "restaurantname": "Ambling Turtle",
      "description": "Step inside the classy and chic Ambling Turtle, a double-storey modern Peranakan Cafe that brings a fresh look to traditional Peranakan cuisine. Bringing brunch and tea time delights infused with authentic Peranakan flavours, you’re in for a nice treat at this chill cafe. For starters, we recommend their Pulled Beef Rendang Set. Choose from either a croissant or a sourdough to complete this hearty meal, and savour the taste of the smokey, tender beef grilled to perfection. If you’re looking for a more ‘lemak’ option, Ambling Turtle’s Nonya Chicken Curry Set makes for the perfect sharing dish among friends. For those wanting just a taste of each, go for Ambling Turtle’s Croissant Sliders. Featuring Nonya Chicken Curry, Satay Chicken, and Pulled Beef Sliders, their croissant sliders are an absolute stroke of genius. Enjoy delicious meaty goodness sandwiched between a buttery flakey croissant that brings out the sweetness of the meat.",
      "district": "East",
      "location": "East Coast",
      "address": "66 East Coast Road, #01-01, The Flow S428778",
      "openinghours": "Sun-Thu: 9am-6pm, Fri-Sat: 9am-10pm",
      "category": "Peranakan",
      "image":"https://static.chope.co/uploads/2022/01/s-725x360x80xo_1641973590_95671.jpg?date=20220315074305",
      "price": "⭐️⭐️",
      "preferences": ["Asian", "Family", "Social", "Arts & Culture"],
      "website": "https://www.chope.co/singapore-restaurants/restaurant/ambling-turtle"
      },
      {
      "objectID": "RS0016",
      "restaurantname": "basdban",
      "description": "basdban is a literal translation of a Sichuanese slang (巴适的板) which means awesomeness. At basdban, we aim to break away from the typical Sichuanese food that you can find locally by offering authentic flavours with a western twist. Here we provide an East-meets-West fusion where we bring the best of both worlds in dishes meant for sharing that is the usual setting in every Chinese family dinner. basdban is a restaurant that is perfect for all occasions; family gatherings, chill session with your friends, unwind with colleagues after work & date night with your special someone.",
      "district": "Central",
      "location": "Telok Ayer",
      "address": "51 Telok Ayer Street, #01-01 S048441",
      "openinghours": "Mon-Sat: 11am-3pm (Last Order: 2:30pm), 6-9:30pm (Last Order: 9pm), Closed Sunday",
      "category": "Chinese",
      "image":"https://static.chope.co/uploads/2021/12/s-725x360x80xo_1638871559_11451.jpg?date=20220315074305",
      "price": "⭐️⭐️⭐️",
      "preferences": ["Asian", "Family", "Social", "Arts & Culture"],
      "website": "https://www.chope.co/singapore-restaurants/restaurant/basdban"
      },
      {
      "objectID": "RS0017",
      "restaurantname": "Beng Hiang Restaurant",
      "description": "Started in 1978, Beng Hiang Restaurant has since established itself as one of the best Hokkien restaurants in Singapore. The interior's simple, homely decor is a nod to the type of fare served here, with unpretentious and hearty Hokkien dishes done right. The piping hot soups are sure to start your meal on the right note, with creations like Fish Maw with Crabmeat and Stewed Black Chicken Herbal Soup. Continue the feasting with a variety of meat, seafood, vegetables, and rice and noodle dishes. Don’t miss traditional Hokkien favourites such as Oyster Omelette, Kong Ba Bao (savoury braised brisket in a steamed bun), and Suckling Pig. The Hokkien Mee is a must-try too, with springy noodles and fresh seafood coated in a generous portion of smoky and umami gravy. There are even premium selections such as Braised Whole Abalone and Drunken Lobster for that special occasion.",
      "district": "West",
      "location": "Jurong",
      "address": "135 Jurong Gateway Road, #02-337 S600135",
      "openinghours": "Mon-Sun: 11:30am-2:30pm, 6-9:30pm",
      "category": "Chinese",
      "image":"https://static.chope.co/uploads/2019/12/s-725x360x80xo_SG_Beng_Hiang_Suckling_Pig_3_j_1576044542.jpg?date=20220315074305",
      "price": "⭐️⭐️⭐️",
      "preferences": ["Asian", "Family", "Social", "Arts & Culture"],
      "website": "https://www.benghiang.com/"
      },
      {
      "objectID": "RS0018",
      "restaurantname": "Burrata Joy & Gustavo Lapasta by Garibaldi",
      "description": "Gustavo Lapasta and Burrata Joy by Garibaldi are the combinations of two concepts, coming together and providing a place for families, friends, and couples to meet and enjoy their time together whilst surrounded by good food. Gustavo, in Italian, actually means “what I used to appreciate”. This allows us to focus on getting people to savour and indulge in the cuisine we appreciate and delight back home with our family and friends. Furthermore, Burrata Joy highlights the connection between appreciating traditional, authentic ingredients in the presence of others.",
      "district": "East",
      "location": "Marine Parade",
      "address": "30 East Coast Road, #01-12/13, Katong V Mall S428751",
      "openinghours": "Mon-Sun: 11:30am-10pm",
      "category": "Italian",
      "image":"https://static.chope.co/uploads/2022/01/s-725x360x80xo_1642488237_12855.jpg?date=20220315074305",
      "price": "⭐️⭐️⭐️",
      "preferences": ["Western", "Chill", "Social", "Family"],
      "website": "https://www.gustavoburratajoy.com/"
      },
      {
      "objectID": "RS0019",
      "restaurantname": "Bōruto",
      "description": "Fusion Japanese and Sake galore is what Bōruto delivers. Located a stone’s throw away from the CBD and styled as a modern day Izakaya, the double-storey, industrial chic establishment is helmed by Chef Patrick Tan, owner of Japanese robatayaki restaurant Tamashii Robataya. The first floor of Bōruto offer foodies a casual dining experience by dispensing out a plethora of shareable dishes from their Italian-Japanese menu like Hotate & Kanpachi Carpaccio, thinly sliced Hokkaido Scallops & Amberjack, and Risotto Croquettes, delicious stuffed potato croquettes with Tomato Risotto. Translating into “Vault” in Japanese, the name Bōruto is a nod to the bank that operated in the same premises and the original bank vault, still functional, sits on the second floor and now securely showcasing the most premium bottles of Sake available. Here, Sake Connoisseurs can enjoy the novelty of walking into the Vault, selecting from a range of up to 30 of the most high-end Sakes available and enjoy a more exclusive experience!",
      "district": "South",
      "location": "Chinatown",
      "address": "80 South Bridge Road, #01-01 S058710",
      "openinghours": "Mon-Sat: 11:30am-2:30pm, 6-10pm, Closed Sunday",
      "category": "Japanese",
      "image":"https://static.chope.co/uploads/2016/06/s-725x360x80xo_Boruto_2nd_Level_Bar_jpg_1466066633.jpg?date=20220315074305",
      "price": "⭐️⭐️⭐️",
      "preferences": ["Asian", "Chill", "Social"],
      "website": "https://boruto.com.sg/"
      },
      {
      "objectID": "RS0020",
      "restaurantname": "Capri Trattoria & Pizzeria",
      "description": "A Bukit Timah favourite for mouth-watering pastas and authentic pizzas, Capri Trattoria & Pizzeria is an Italian eatery we’re certain everyone will love. Offering a warm and rustic ambiance, along with an authentic region-centric menu, it’s one spot that’s got traditional Italian eats in the bag! With something on the menu for everyone, Capri Trattoria’s à la carte menu is where most people will want to start. From seafood fans who’ll find the Gamberi e Cappesante alle Erbe, warm prawns and scallops with mediterranean herbs, remarkable to the meat eaters who’ll yearn to devour the Cotoletta alla Milanese, a juicy 300g bone-in deep-fried breaded veal chop, substantial eats is what this Italian eatery is all about!",
      "district": "West",
      "location": "Bukit Timah",
      "address": "3 Binjai Park S589819",
      "openinghours": "Tue-Sun: 12-2:30pm, 6-10:30pm, Closed Monday",
      "category": "Italian",
      "image":"https://static.chope.co/uploads/2018/07/s-725x360x80xo_SG_Trattoria_Capri_Marinated_R_1532329734.jpg?date=20220315074305",
      "price": "⭐️⭐️⭐️",
      "preferences": ["Western", "Chill", "Social", "Family", "Mediterranean", "Romantic"],
      "website": "https://trattoriacapri.com/"
      },
      {
      "objectID": "RS0021",
      "restaurantname": "Cherry Garden",
      "description": "One of the most beautiful restaurants in Singapore, Cherry Garden offers an eclectic menu of Cantonese cuisine, presented with artistic modern flair. Entered via a striking antique doorway, the restaurant has been designed according to Feng Shui. Charcoaled teak panels and slate floors recreate the look of a splendid Oriental residence. Using fresh, seasonal produce, the menu changes regularly but always offers authentic Cantonese dishes. A varied wine list features a balanced selection of old and new world wines specially selected to match the menu. A wide selection of Chinese teas is also available.",
      "district": "Central",
      "location": "Raffles Place",
      "address": "5 Raffles Avenue, Marina Square, The Mandarin Oriental S039797",
      "openinghours": "Wed-Sun: 12-2:30pm, 6:30-10pm, Sat-Sun & PH: 11am-1pm (1st Seating), 1:30-3:30pm (2nd Seating), 6:30-10pm, Closed Monday & Tuesday",
      "category": "Chinese",
      "image":"https://static.chope.co/uploads/2017/10/s-725x360x80xo_Cherry_Garden_Private_Dining_R_1508136368.jpg?date=20220315074305",
      "price": "⭐️⭐️⭐️⭐️",
      "preferences": ["Asian", "Social", "Family"],
      "website": "https://www.chope.co/singapore-restaurants/restaurant/cherry-garden"
      },
      {
      "objectID": "RS0022",
      "restaurantname": "Feast Roxy",
      "description": "Eat, drink and meet at Feast Roxy, a new multi-concept restaurant set as the ideal venue to cater to multiple lifestyle settings. Be it a casual dinner, intimate catch up or small scale gatherings, Feast Roxy is a great place for all.",
      "district": "East",
      "location": "East Coast",
      "address": "50 East Coast Road, Grand Mercure Singapore Roxy S428769",
      "openinghours": "Mon-Sun: 12-9pm",
      "category": "International",
      "image":"https://static.chope.co/uploads/2021/08/s-725x360x80xo_1628762333_61819.jpg?date=20220315074305",
      "price": "⭐️⭐️⭐️⭐️",
      "preferences": ["Western","Social", "Family", "Mediterranean"],
      "website": "https://www.grandmercureroxy.com.sg/dining/feast-roxy"
      },
      {
      "objectID": "RS0023",
      "restaurantname": "Feng Shui Inn",
      "description": "Helmed by Hong Kong veteran chef Li Kwok Kwong, this elegant restaurant decorated with gold leaf ceilings serves up Cantonese masterpieces that are exquisite in presentation and taste. The extensive menu features perennial favourites like Chinese barbecued meats and dim sum, as well as nourishing double-boiled soups that are a staple in Cantonese cuisine. The Double-Boiled Black Chicken Soup with Fish Maw and Cordyceps Flower is lovingly prepared from a stock of Chinese Jin Hua ham, pork shoulder, and old fowl that is simmered over low heat for six hours to coax out deep, rich flavours. For mains, the signature dishes at Feng Shui Inn are a must-try. Chilled Prawn with Lemon Sauce is given a modern twist with a side of fluffy lobster pancakes, drizzled with salted egg yolk and buttercream sauce. Order also the Pan-Fried Wagyu Beef in Teriyaki Sauce, where cubes of tender and juicy medium-rare steak are tossed in a sweet sauce. Other must-tries include Pan-Seared Japanese Kurobuta Pork Loin, as well as Roast Quail Drumstick in Black Truffle Sauce. For carb-loves, ‘Kampong Uncle’ Fried Rice in Hot Pot is a sizzling dish with delicious crispy bits at the bottom of the claypot. End the meal on a sweet note with traditional desserts like Double-Boiled Hashima with Red Dates and Double-Boiled Almond Cream with Glutinous Rice Balls.",
      "district": "South",
      "location": "Sentosa",
      "address": "8 Sentosa Gateway, #01-521 & 522, Equarius Hotel Lobby S098269",
      "openinghours": "Mon-Sun: 11am-12:30pm (1st Seating), 1-2:30pm (2nd Seating), 6pm (1st Seating), 8:30pm (2nd Seating)",
      "category": "Chinese",
      "image":"https://static.chope.co/uploads/2019/03/s-725x360x80xo_SG_Feng_Shui_Inn_Assortment_of_1553499295.jpg?date=20220315074305",
      "price": "⭐️⭐️⭐️⭐️",
      "preferences": ["Asian", "Social", "Family"],
      "website": "https://www.chope.co/singapore-restaurants/restaurant/feng-shui-inn"
      },
      {
      "objectID": "RS0024",
      "restaurantname": "Euphoria",
      "description": "Restaurant Euphoria is the showcase for Gastro-Botanica, the culinary philosophy by celebrated chef Jason Tan. The name ‘Euphoria’ and the Chinese character ‘忆’ in the logo convey the promise of delight, wonderment, and enduring memory awaiting the diner. With Restaurant Euphoria, Chef Jason introduces Gastro-Botanica 2.0, the elevated iteration of his original cuisine that showcases carefully sourced and prepared premium vegetables, meats and seafood, where prominence and elaboration are given to botanical elements of vegetables, tubers, herbs, spices, and fruits. Version 2.0 introduces botanical essences to create base sauces known as Gastro-Botanica Essences – La Symphonie de Légumes. In doing so, Chef Jason radically departs from the foundational ‘mother sauces’ of French haute cuisine, thus blazing the trail for further innovation. Euphoria features completely new 2.0 creations, along with Chef Jason’s signature dish of the Cévennes onion in four ways called ‘My Favourite Vegetable’. Located in vibrant Tras Street, the restaurant recreates a lush garden within its heritage shophouse interior, setting the stage for a gastronomic journey with a ground-breaking chef at the peak of his craft.",
      "district": "Central",
      "location": "Tanjong Pagar",
      "address": "76 Tras Street S079015",
      "openinghours": "Tue: 6:30-11pm, Wed-Sat: 12-2:30pm, 6:30-11pm, Closed Sunday & Monday",
      "category": "French",
      "image":"https://static.chope.co/uploads/2020/10/s-725x360x80xo_1603780454_28176.jpg?date=20220315074305",
      "price": "⭐️⭐️⭐️⭐️⭐️",
      "preferences": ["Western", "Romantic"],
      "website": "https://restaurant-euphoria.com/"
      },
      {
      "objectID": "RS0025",
      "restaurantname": "Ki-Sho",
      "description": "Meaning “aristocratic craftsmanship”, Ki-sho reflects a value deeply ingrained in every aspect of the dining journey we intend for our guests. From the architecture of the building and the vessels that contain the food, right down to the seasonally inspired ingredients you savour and the sake you sip, Ki-sho is a culinary showcase for Japanese artisanship delivered with omotenashi. Set in a heritage black-and-white bungalow along Scotts Road that once served as a residence for colonial era civil servants, Ki-sho offers a kappo-style dining room with an L-shaped hinoki wood counter that sits 11 guests. Additionally, two dining rooms –for eight and 12 guests respectively -on the upper deck offer guests an exclusive space to dine in complete privacy.",
      "district": "Central",
      "location": "Orchard",
      "address": "29 Scotts Road S228224",
      "openinghours": "Mon-Fri (Excluding PH): 12-2:30pm, 6:30-10:30pm, Sat: 6:30-10:30pm, Closed Sunday",
      "category": "Japanese",
      "image":"https://static.chope.co/uploads/2018/01/s-725x360x80xo_Ki_Sho_Sushi_Counter_jpg_1516795867.jpg?date=20220315074305",
      "price": "⭐️⭐️⭐️⭐️⭐️",
      "preferences": ["Asian", "Romantic"],
      "website": "https://ki-sho.com.sg/"
      },
      {
      "objectID": "RS0026",
      "restaurantname": "Les Amis",
      "description": "Since its inception in 1994, Les Amis, the sophisticated first-born of the Les Amis Group, has always strived to maintain the restaurant's philosophy - to deliver the ultimate fine-dining experience realized through attention to detail and dedication to sourcing and serving the finest ingredients. After picking up the reins at Les Amis in 2014, Chef Sebastien has made it his mission to further the restaurant's philosophy by emphasizing the focus on the quality of ingredients used, rather than targeting the latest cooking trends. Today, 90% of the ingredients used at Les Amis are imported from France, carefully crafted and skilfully presented in an elegant setting of luxurious comfort.",
      "district": "Central",
      "location": "Orchard",
      "address": "1 Scotts Road, #01-16, Shaw Centre S228208",
      "openinghours": "Mon-Sun: 12-3pm (Last Seating: 1:30pm, Last Order: 1:45pm), 7-9pm (Last Seating: 8:30pm, Last Order: 8:45pm)",
      "category": "French",
      "image":"https://static.chope.co/uploads/2016/09/s-725x360x80xo_Les_Amis_Private_Dining_Room_j_1475142711.jpg?date=20220315074305",
      "price": "⭐️⭐️⭐️⭐️⭐️",
      "preferences": ["Western", "Mediterranean", "Romantic"],
      "website": "https://www.lesamis.com.sg/"
      },
      {
      "objectID": "RS0027",
      "restaurantname": "Mizuki",
      "description": "Tucked in Ngee Ann City along Orchard Road, Mizuki is a Japanese restaurant to enjoy cuisine of the highest order. Well-known for their Omakase Tempura Meal, the restaurant specialises in whipping up tasty tempura dishes. Perfect for intimate meals, the restaurant is segregated into private rooms with the option of dining at the sushi counter or the tempura counter. For the tempura experience, start with a simple plate of spinach and beancurd skin in dashi sauce before moving onto the scallop. Cooked medium rare, the wonderful texture of the scallop elevates the dish, giving it a fantastic flavour. Deep fried to perfection, the anago is a delicious mouthful of sweet and tangy flavour, enhanced by the acidity brought about by a drop of lemon juice. Wrap up your meal with a small bowl of fluffy Japanese short grain rice topped with diced tempura prawns.",
      "district": "Central",
      "location": "Orchard",
      "address": "391 Orchard Road #05-32, Ngee Ann City Podium Block S238872",
      "openinghours": "Tue-Sun: 11:30am-3pm, 6-10:30pm, Closed Monday",
      "category": "Japanese",
      "image":"https://static.chope.co/uploads/2020/11/s-725x360x80xo_1604919606_83737.jpg?date=20220315074305",
      "price": "⭐️⭐️⭐️⭐️⭐️",
      "preferences": ["Asian", "Family","Romantic"],
      "website": "https://www.restaurantmizuki.com/"
      },
      {
      "objectID": "RS0028",
      "restaurantname": "béni Singapore",
      "description": "béni, a French term which translates to blessing, offers one of the most exclusive epicurean experiences available in Singapore, showcasing fine authentic French cuisine with a Japanese touch. Helmed by Executive Chef Kenji Yamanaka, who has built up a formidable gamut of experience with a portfolio that includes stints at three-star Michelin restaurants Georges Blanc in Vonnas, France, and L’Osier in Ginza, Tokyo, this charming eatery has earned several accolades including the prestigious 1-Michelin Star. Chef Kenji's thoughtfully crafted discovery menus feature fresh produce, with meats and fish sourced and flown in from artisanal producers in Japan, and seasonal fresh vegetables from France. Highlights include Kenji's signature Amadai dish. The Amadai fish from Kyoto Prefecture is cooked in the traditional Matsukasayaki style where the scales are left on the fish and fried to a crisp resembling pine cones. This gives the fish a very unique combination of crispy and tender textures. While the cooking method remains the same, Chef Kenji comes up with new flavours to pair the Amadai with, based on the season, a reflection of his dedication to the craft.",
      "district": "Central",
      "location": "Orchard",
      "address": "333A Orchard Road #02-37, Mandarin Gallery S238897",
      "openinghours": "Mon-Sat: 12-3pm, 7-10pm, Closed Sunday",
      "category": "French",
      "image":"https://static.chope.co/uploads/2018/06/s-725x360x80xo_SG_beni_Singapore_Counter_Seat_1528369601.jpg?date=20220315074305",
      "price": "⭐️⭐️⭐️⭐️⭐️",
      "preferences": ["Western", "Mediterranean", "Romantic"],
      "website": "http://www.beni-sg.com/httpdocs/index.html"
      },
      {
      "objectID": "RS0029",
      "restaurantname": "Lerouy",
      "description": "It’s modern French cooking that’s served at Lerouy. True to the modern ethos that permeates the entire establishment, the setting features an elegant, winding counter which curves around an open kitchen. The restaurant offers a tasting menu which evolves and changes from time to time, but which constantly features exciting creations with the chef’s strong individual stamp. The only thing predictable about Lerouy is the consistently excellent cooking which never fails to impress, so do head down sometime soon and give it a go! ",
      "district": "Central",
      "location": "Tanjong Pagar",
      "address": "104 Amoy Street S069924",
      "openinghours": "Wed-Sat: 12-2pm, 6-10pm, Closed Sunday, Monday, and Tuesday",
      "category": "French",
      "image":"https://static.chope.co/uploads/2021/05/s-725x360x80xo_1620275473_35495.jpg?date=20220315074305",
      "price": "⭐️⭐️⭐️⭐️",
      "preferences": ["Romantic"],
      "website": "https://lerouy.com/"
      },
      {
      "objectID": "RS0030",
      "restaurantname": "Restaurant Labyrinth",
      "description": "The idea for Restaurant Labyrinth came about when Chef LG Han realised that whilst Singapore is a bastion of great street food, the quality of dishes vary widely from hawker centre to hawker centre. Thus, Restaurant Labyrinth was conceptualized to provide a consistent level of top-notch, elevated Singaporean street food under one roof, complete with an edgy ambience. Starting with a menu featuring some of Chef LG’s most-loved local dishes, diners will now be able to indulge in his signature “Ang Moh” Chicken Rice, the recipe of which was left to him by his beloved late grandmother, as well as Laksa featuring Local Green Lipped Mussels stuffed with homemade Fish Paste, Crab Meat Her Geow and Grilled Argentinian Red Prawns in a luscious broth.",
      "district": "Central",
      "location": "Marina Bay",
      "address": "8 Raffles Avenue #02-23, Esplanade Mall S039802",
      "openinghours": "Wed: 6:30-10:30pm (Last Seating: 8pm), Thu-Sun: 12-2:30pm (Last Order: 1pm), 6:30-10:30pm (Last Seating: 8pm), Closed Monday & Tuesday",
      "category": "Asian",
      "image":"https://static.chope.co/uploads/2021/11/s-725x360x80xo_1637042775_42789.jpg?date=20220315074305",
      "price": "⭐️⭐️⭐️⭐️",
      "preferences": ["Family", "Arts & Culture", "Social"],
      "website": "https://www.restaurantlabyrinth.com/"
      },
      activityData: 
]
      user: ""
      // email: getAuth().currentUser.email
      // food: [],
      // activities: []
    };
  },

  methods: {
    change() {
      window.location.reload();
    },
    display: async function(user) {
      // const food = [];
      // const activities = [];
      const foodItems = [];
      const activityItems = [];
      console.log(user);

      //retrieve user's preferences
      const preferences = [];
      const prefRef = await getDocs(
        collection(db, "users", user, "preferences")
      );
      prefRef.forEach(doc => {
        preferences.push(doc.data().name);
      });
      this.preferences = preferences;

      console.log(this.preferences);

      //retrieve user's suggested food
      // const foodRef = await getDocs(collection(db, "wander-food"));
      const queryFood = query(
        collection(db, "wander-food"),
        where("preferences", "array-contains-any", this.preferences)
      );
      const foodSnap = await getDocs(queryFood);
      foodSnap.forEach(doc => {
        foodItems.push({
          key: doc.data().objectID,
          name: doc.data().restaurantname,
          address: doc.data().address,
          postalCode: doc.data().postalcode,
          image: doc.data().image,
          category: doc.data().category,
          price: doc.data().price,
          openinghours: doc.data().openinghours
        });
        // console.log(doc.data());
      });
      this.foodItems = foodItems;

      //retrieve user's suggested activities
      // const activityRef = await getDocs(collection(db, "wander-activity"));
      const queryActivity = query(
        collection(db, "wander-activity"),
        where("preferences", "array-contains-any", this.preferences)
      );
      const activitySnap = await getDocs(queryActivity);
      activitySnap.forEach(doc => {
        activityItems.push({
          key: doc.data().objectID,
          name: doc.data().restaurantname,
          address: doc.data().address,
          postalCode: doc.data().postalcode,
          image: doc.data().image,
          category: doc.data().category,
          price: doc.data().price,
          openinghours: doc.data().openinghours
        });
        // console.log(doc.data());
      });
      this.activityItems = activityItems;
      // console.log(this.items);
    }
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, currUser => {
      if (currUser) {
        const userEmail = currUser.email;
        this.user = userEmail;
        console.log(this.user);
        this.display(this.user);
      } else {
        console.log(currUser, "user not found....");
      }
    });
    console.log("Component mounted");
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

.text-span {
  padding-right: 10px;
  padding-left: 10px;
  line-height: 22px;
  display: inline-block;
  padding: 0 7px;
  font-size: 12px;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 2em;
  background-color: lightgrey;
}

/* .carousel {
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 50px;
  margin-bottom: 50px;
} */

#border-wrapper {
  text-align: center;
}

#border {
  position: relative;
  width: 5%;
  height: 3px;
  background-color: #4fbfa8;
  margin: 0px auto 15px auto;
}
</style>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
