import { MapPin, Star } from 'lucide-react';
import { useState } from "react";
import Australia from '../assets/images/aerial-view-city-by-water.jpg'
import NewZeland from "../assets/images/breathtaking-view-beautiful-landscape-surrounded-by-mountains-wanaka-town-new-zealand.jpg"
import PapuaNew from "../assets/images/high-angle-shot-key-summit-lake-marian-new-zealand.jpg"
import indonesia from "../assets/images/indonesia.jpg"
import malaysia from "../assets/images/malaysia.jpg"
import Thailand from "../assets/images/pexels-saad-ibrahem-3109951-4708321.jpg"
import japan from "../assets/images/people-walking-japan-street-nighttime.jpg"
import Nepal from "../assets/images/aerial-shot-small-village-hill-surrounded-by-forested-mountains.jpg"
import paris from "../assets/images/paris.jpg"
import Swizerland from "../assets/images/swizerland.jpg"


const destinations = [
  {
    name: 'Australia',
    image: Australia,
    tours: 12,
    rating: 4.9,
    desc: "Australia is not just a country, it’s a land full of beauty, adventure, and unforgettable moments. With its peaceful white beaches, romantic islands, thick green forests, and stylish cities, it offers something special for everyone. Whether you are a couple planning your honeymoon, a family on vacation, a group of friends, or a solo traveller looking for new experiences, Meer Travels gives you the perfect Australian holiday with excitement, comfort, and personal care. Your journey begins in Sydney, the heart of Australia. You can take memorable couple selfies at the iconic Sydney Opera House, enjoy a romantic walk over the Harbour Bridge, or go on a dreamy dinner cruise at Darling Harbour. Don’t forget to spend a calm evening at Bondi Beach, where the sunset and sea breeze will refresh your soul. Next, head to the Gold Coast, famous for its long sandy beaches, blue water, and fun theme parks like Sea World, Movie World, and Dreamworld. You can enjoy a helicopter ride over the beautiful coastline, visit luxury shopping spots, and eat at beachside seafood cafés. For couples who love nature and adventure, Cairns and the Great Barrier Reef are perfect. You can go snorkeling and see colourful corals and sea life, take private boat rides to small peaceful islands, and explore the ancient Daintree Rainforest with jungle walks and waterfalls. It’s a great place to connect with nature and each other. Melbourne brings a touch of elegance to your journey. This stylish city is full of street markets, art cafés, green gardens, and vibrant nightlife. A romantic wine tour in the Yarra Valley is a must, where couples can taste fine wines in beautiful surroundings. Driving along the Great Ocean Road is another unique experience – with sea cliffs, coastal towns, and natural beauty everywhere you look. For honeymooners, Australia offers luxury and romance in every corner. Imagine enjoying a candle-light dinner on a beach in Gold Coast, staying in a private villa or ocean-view suite with a jacuzzi, and having a professional couple photoshoot in Sydney or by the beach. You can also relax together with spa treatments and couple massages, making it a trip full of love and memories. When it comes to food, Australia is a delight. You must try fresh seafood like prawns, fish, and oysters. Aussie-style pizzas, grilled dishes, lamington cakes, fluffy pancakes, and creamy chocolates are all part of the tasty journey. Enjoy your meals in beach cafés or rooftop restaurants with a beautiful view. Don’t return home without buying some unique Australian gifts. You can pick up cute koala and kangaroo souvenirs, precious opal jewellery, handmade clothes, and of course, the famous Tim Tam chocolates – a treat everyone loves. With Meer Travels, your Australian holiday becomes more than just a tour – it becomes a memory you’ll cherish forever. Let us take care of all your bookings, comforts, and experiences so you can simply enjoy your time in this magical land."
  },
  {
    name: 'New Zeland',
    image: NewZeland,
    tours: 18,
    rating: 4.8,
    desc: "New Zealand is one of the most beautiful countries in the world. With its snow-covered mountains, clean blue lakes, peaceful green valleys, and romantic beaches, it feels like a paradise specially made for couples. Whether you're on your honeymoon or just looking for a romantic escape, Meer Travels brings you the best of New Zealand with comfort, love, and unforgettable experiences. Your journey begins in Auckland, also known as the City of Sails. Here, you can visit the famous Sky Tower and enjoy breathtaking views of the entire city from the top. You can also take a romantic harbour cruise in the evening with dinner under the stars. If you're looking for a peaceful beach and wine experience, you can visit the nearby Waiheke Island – it’s perfect for couples who love both nature and a bit of luxury. Next, we take you to Rotorua, the land of hot springs and mud pools. It’s like nature’s own spa. Couples can relax together in warm mineral pools, enjoy soothing spa sessions, and experience a live Maori cultural show, where you’ll see traditional music, dance, and rituals of New Zealand’s native people. Queenstown is another must-visit place, especially for honeymooners. Surrounded by snow-covered mountains and shining lakes, this place looks like a fairy tale. You can enjoy a romantic gondola ride to the mountain top and have dinner with stunning views. If you are adventurous, try skydiving, bungee jumping, or paragliding together – memories that will last a lifetime. One of the most peaceful and magical parts of the trip is Milford Sound. Here, you will take a calm cruise between tall green mountains, deep blue waters, and beautiful waterfalls. You might even spot dolphins, penguins, and seals swimming along. It’s a perfect place for couples to feel close to nature and each other. Christchurch, also called the Garden City, offers a peaceful environment with lovely botanical gardens, lakes, and scenic farm drives. It’s great for a slow, relaxing day. You can enjoy street shopping, sit in vintage cafés, or visit the countryside to see sheep farms and hills. New Zealand is an ideal honeymoon destination because it offers clean air, peaceful surroundings, and natural beauty that looks like Switzerland. You’ll find romantic resorts, lake-view villas, and private cottages where candle-light dinners, couple photoshoots, and spa services are easily available. The country is also very safe, clean, and welcoming for tourists. When it comes to food, don’t miss the delicious lamb roast, BBQ dishes, local wines from Marlborough and Waiheke, and kiwi-style meat pies. Sweet lovers must try the Pavlova dessert and hokey pokey ice cream – both are local favourites. Before you return, shop for beautiful souvenirs like greenstone (jade) jewellery that is believed to bring good luck, soft woollen clothes and blankets, pure Manuka honey which is very good for health, and traditional Maori handicrafts and chocolates."
  },
  {
    name: 'Papua new guinea',
    image: PapuaNew,
    tours: 15,
    rating: 5.0,
    desc: "Papua New Guinea is a place that feels like a hidden paradise, untouched and pure. It’s the perfect destination for honeymoon couples who want peace, adventure, and real connection with nature and each other. Far from the noise of big cities, here you’ll find white sand beaches, crystal-clear waters, jungle rivers, waterfalls, and a culture that is full of colors, stories, and warmth. Your journey can start in the capital city, Port Moresby, where Ela Beach welcomes you with soft sand, calm sea, and golden sunsets. Couples love walking hand-in-hand along the beach, taking beautiful pictures, and spending quiet time in beachfront cafés. The Nature Park here is a peaceful green heaven where you can see rare birds, butterflies, and flowers – perfect for a gentle romantic outing. Next, visit Tufi, a place surrounded by deep fjords – sea inlets that look like something out of Norway, but with a tropical twist. You can stay in private cliff-side resorts where your window opens to endless ocean views. Together, you can go kayaking through jungle rivers or snorkel in coral reefs full of colorful fishes. Tufi gives you a mix of thrill and romance that every couple dreams of. Then there’s Kavieng – a quiet island with turquoise blue beaches and soft waves. It’s a dream spot for couples who love privacy. You can go scuba diving here and swim alongside turtles and colorful fish, with expert guides to keep everything safe. It’s a peaceful escape where you’ll feel like it’s just you two and the sea. Madang is another beautiful stop on your romantic journey. Known for its blue lagoons and calm rivers, it is the perfect place to relax and soak in nature. You can take boat rides during sunset or even spot dolphins swimming close by. One of the most unique experiences is visiting local villages where you’ll meet friendly people and learn about traditional tribal life – something deeply touching and memorable for couples. If you both enjoy mountains and culture, head to Mount Hagen and the Highlands. Here, the scenery is green and fresh, filled with trails, hot springs, and waterfalls. Couples can go for peaceful hikes, enjoy natural beauty, and take part in cultural festivals with tribal dances, colorful costumes, and music. It’s not just sightseeing – it’s an emotional connection to something ancient and soulful. Papua New Guinea also has a lot of couple-friendly adventure. You can go river canoeing through green forests, snorkel and dive in coral gardens, camp under open stars with a warm bonfire, or walk through jungle trails with birds singing around. If you want something really thrilling, visit Rabaul, a place with real active volcanoes – a once-in-a-lifetime experience for brave and adventurous couples. The food in Papua New Guinea is both tasty and healthy. You can enjoy grilled seafood like lobsters, prawns, and fresh fish cooked right on the beach. Try the traditional dish called “Mumu” – meat and vegetables slow-cooked underground, full of rich flavor. Coconut water, tropical fruits, and fresh chocolates add to your romantic evenings, and the local PNG coffee is a perfect way to end the day together. Before you leave, bring home beautiful memories and gifts. Handmade tribal masks, woven Bilum bags by local women, and shell jewellery are not just items – they are symbols of love, culture, and craftsmanship. Don’t forget to take some PNG coffee and spices – aromatic, organic, and perfect for your kitchen back home."
  },
  {
    name: 'indonesia',
    image: indonesia,
    tours: 10,
    rating: 4.9,
    desc: "Indonesia is not just a destination, it's a dreamy journey that every couple deserves after starting their new life together. From magical sunsets in Bali to peaceful islands like Gili and Lombok, Indonesia offers a beautiful blend of romance, luxury, culture, and nature — all in one unforgettable honeymoon. Begin your love journey in Bali, known as the Island of Gods and also the island of love. Walking together in the Ubud rice terraces, hand-in-hand, feels like a peaceful escape into green paradise. Take a romantic break near cool waterfalls like Tegenungan or Gitgit — these are lesser-known but give you a private picnic spot surrounded by natural beauty. For couples who want a luxurious experience, Bali offers private pool villas in Seminyak or Uluwatu. Imagine a candle-light dinner beside your own pool, flowers floating in the bath, and soft music in the background. Watching the sunset at Tanah Lot Temple is like witnessing love painted on the sky. At Nusa Dua beach, the soft white sand and blue sea make it perfect for couple photography or a fun swim. After a long day, enjoy a couple spa in Ubud, where flower baths and aromatherapy bring total relaxation. If you want a peaceful and private island life, head towards the Gili Islands – where there are no cars, no horns, only horse carts, cycles, and ocean breeze. The clear blue water, beach cafés, coral reefs, and slow life create the perfect romantic environment. Gili Meno is the quietest among the three Gili islands, making it a top choice for honeymooners. You can snorkel together, enjoy dinner by the sea, or just lie on the beach under the stars. Looking for something even more untouched? Lombok is your answer. Less crowded and more pure, this place has beautiful beaches, volcano views, eco-resorts, and pink sand that adds magic to your love story. You and your partner can explore hidden waterfalls or simply enjoy nature at your own pace. For adventurous couples, the Komodo Islands offer something truly unique. A private boat cruise takes you through the Komodo National Park where you can see the famous Komodo dragons. You’ll visit the pink sand beach — yes, real pink! — and dive underwater to discover a whole new colorful world while snorkeling. Dining on the boat deck under the sky creates one of the most unforgettable memories. Indonesia is also full of rich culture. In Yogyakarta, you’ll find royal palaces, art, and one of the most spiritual honeymoon experiences — the sunrise at Borobudur Temple, a UNESCO World Heritage Site. Standing on top of the ancient temple and watching the first light of the day with your loved one is a deeply emotional and romantic moment. Try local foods together, and shop for beautiful batik prints and traditional crafts in the markets. The food in Indonesia adds even more love to the journey. Whether it's hot plate of Nasi Goreng (Indonesian fried rice), juicy Sate Ayam (chicken satay), sweet & crispy Martabak, or fried bananas with chocolate, each bite brings joy. Don’t forget to sip fresh coconut water on the beach – simple, natural, and refreshing. Bring home special memories with souvenirs like silver jewellery, pearls, handmade Balinese paintings, traditional batik clothes, aromatic herbal oils, and some of the world’s best coffee."
  },
  {
    name: 'malaysia',
    image: malaysia,
    tours: 20,
    rating: 4.7,
    desc: "Malaysia is the perfect mix of city lights, nature, beaches, and peace — ideal for couples who want both fun and privacy on their honeymoon. Whether you want to click romantic selfies at tall towers or enjoy quiet moments on a beach, Malaysia gives you everything, that too in budget. With Meer Travels, you can explore the most beautiful couple-friendly places, while we handle everything from hotels to candle-light dinners. Begin your honeymoon in Kuala Lumpur, the modern heart of Malaysia. Holding hands at the famous Petronas Twin Towers, walking the sky bridge and watching the city lights sparkle at night feels magical. Don’t miss the KL Tower Sky Deck, where the whole city glows under your feet. For young couples, the Bukit Bintang area is perfect – full of street food, live music, shopping, and energy. Want a quiet, cute date? Visit Aquaria KLCC, where you walk through a tunnel surrounded by sharks and colorful fishes. And after a long day, enjoy rooftop candle-light dinners at luxury hotels – it’s affordable but feels 5-star. If you both love beaches, then Langkawi is the most romantic island. Ride together on the Langkawi Sky Bridge – it feels like walking in the sky, holding your partner close. Stay in private beach resorts with ocean views, and you’ll be surprised how budget-friendly they are. Go for an island-hopping cruise, enjoy snorkeling, explore the mangrove forest on a quiet boat ride, or just relax with a sunset dinner and couple massage by the beach. Every moment becomes a memory here. For nature lovers, Cameron Highlands is like a mini Shimla. The cool weather, green tea gardens, strawberry farms, and waterfalls make it a calm and romantic retreat. You can book beautiful nature resorts in ₹3,000–₹5,000 per night — peaceful, scenic, and affordable. Enjoy jungle walks together or just sit on your balcony sipping hot tea in the misty hills. Want a little fun and thrill? Head to Genting Highlands – just a short ride from KL. The cable car ride through clouds is breathtaking. Once on top, explore everything — casino, shopping malls, indoor and outdoor theme parks, Snow World, VR games, and much more. It’s a mix of romance and fun, all in one place. Malaysia is also known for its clean and peaceful beaches. Langkawi has long white beaches and water adventures. If you want privacy, go to Tioman Island or Perhentian Islands, where it’s less crowded and more romantic. For couples who want a short beach trip near the city, Port Dickson (just 1.5 hours from KL) is perfect. And the food — it's delicious and desi-friendly. Try Nasi Lemak, the national dish with rice, egg, sambal, and curry. Love paratha? Then Roti Canai will become your favorite. For non-veg lovers, there’s delicious satay (BBQ meat skewers). And don’t worry – you’ll find Indian veg and halal food everywhere, from roadside stalls to nice restaurants. Sip on Teh Tarik, Malaysia’s own strong chai – perfect for chai-loving couples!"
  },
  {
    name: 'Thailand',
    image: Thailand,
    tours: 14,
    rating: 4.8,
    desc: "Thailand is one of the most loved and budget-friendly international honeymoon spots for Indian couples. With direct flights, visa-on-arrival, easy language, and Indian food at every corner – Thailand feels like a home away from home, but with exotic beaches, private resorts, and unforgettable memories. Meer Travels brings you a dreamy Thailand honeymoon package that fits both your heart and your pocket – starting from just ₹65,000 per couple for 5 nights and 6 days. Start your romantic journey from Phuket, the true island of romance. Watch the magical sunset from Promthep Cape, where the sky turns golden and the sea reflects your love. Take a boat trip to the world-famous James Bond Island, explore sea caves, click couple selfies, and enjoy the peaceful ride in the middle of beautiful lagoons. Stay in a private pool villa where luxury meets privacy — the perfect place to relax, celebrate love, and enjoy a special candle-light dinner. Don’t forget to indulge in a relaxing couple Thai massage — an experience you both will remember forever. Next, head to Krabi, known for its clean and peaceful beaches like Ao Nang and Railay, which are less crowded and perfect for honeymooners. Enjoy the famous 4 Island Tour, go snorkeling together in the crystal-clear water, or just lay by the beach with fresh coconut water in hand. End your day with a romantic seafood dinner by the sea, watching waves and stars — pure bliss. Your Thailand trip is incomplete without a visit to Bangkok – a city full of colors, energy, and charm. Shop your hearts out at Chatuchak and Platinum Mall, visit the beautiful Grand Palace, explore the Floating Market, and take a magical Chao Phraya Dinner Cruise, where live music, buffet, and river breeze set the mood just right. What makes Bangkok extra special is that Indian food is available everywhere – from North Indian thali to South Indian dosa, you’ll never miss home. Thailand also offers some of the most beautiful beaches in the world — Phi Phi Islands are calm and romantic, Maya Bay is perfect for dreamy photos, Coral Island gives you an underwater world to explore, and Patong Beach brings nightlife, fun, and long beach walks. Each location adds a new color to your love story. And yes, foodies will fall in love with Thai cuisine. From spicy Pad Thai noodles, sweet and tangy Pineapple Fried Rice, to flavorful Chicken Satay, the food is tasty and filling. But no worries for desi taste — you’ll get everything from butter naan to biryani easily across Thailand. Wash it all down with cold coconut water or sweet Thai iced tea. Shopping in Thailand is a delight — from Thai silk, beachwear, handmade soaps, aroma oils, to funky jewelry and couple bracelets, there’s a lot to bring back as memories. Best time to visit is between November to April, when the weather is pleasant, sunny, and best for beach activities. Avoid the monsoon months (July to September) if you want to enjoy boat rides and island tours. Meer Travels takes care of everything – from visa-on-arrival assistance to flights, hotel bookings to island tours, candle-light dinners to couple massages, Indian-speaking guides to 24x7 honeymoon support. You just pack your bags and take your partner’s hand — the rest, we’ll handle with love. Let your honeymoon be more than just a trip. Let it be a memory that stays forever. Book your Thailand honeymoon with Meer Travels — because love deserves a perfect beginning."
  },

  {
    name: 'Japan',
    image: japan,
    tours: 14,
    rating: 4.8,
    desc: "Japan is a place where modern technology lives peacefully with ancient culture. From temples and castles to cherry blossoms and mountain views, every corner of Japan tells a unique story. Whether you're looking for spiritual calm, romantic moments, family fun, or cultural discovery, Japan welcomes you with open arms. Meer Travels brings you the perfect Japan tour — filled with beauty, adventure, and peace of mind. Start your journey with the historic monuments that define the soul of Japan. Visit the famous Fushimi Inari Shrine in Kyoto, where thousands of red gates line up one after the other, creating a spiritual path that's perfect for photographs and quiet reflection. Himeji Castle, also known as the White Heron Castle, is a symbol of Japan’s strength and beauty — it’s even listed as a UNESCO World Heritage site. At Itsukushima Shrine on Miyajima Island, you’ll see the magical floating red gate rising from the sea — a scene that feels straight out of a dream. Explore the iconic Osaka Castle, surrounded by peaceful gardens, and step into Senso-ji Temple in Tokyo — the city’s oldest temple, full of traditional energy, local shops, and warm blessings. Each city in Japan has its own personality. Tokyo, the capital, is where skyscrapers meet ancient shrines. You can enjoy street food, luxury shopping, anime culture, and quiet parks all in one day. In Kyoto, experience the heart of Japan’s culture — walk through bamboo forests, sit in peaceful gardens, watch geishas, and take part in a traditional tea ceremony. Osaka is known as the food capital — full of exciting nightlife and street food that will make your mouth water. Visit Hiroshima to understand Japan’s modern history, and walk through the Peace Memorial Park, which tells the story of hope and healing. Don’t forget Nara, where friendly deer roam freely and the Todai-ji Temple holds a massive Buddha statue — a powerful place of peace. When it comes to beaches, Japan surprises you. The Okinawa Islands offer white sandy beaches, clear waters, and the feeling of being in a peaceful tropical paradise — perfect for honeymooners. Ishigaki Beach is quiet and romantic, great for couples. Families will love Shirahama Beach, while Zushi Beach, just outside Tokyo, is a perfect weekend escape to relax and refresh. Festivals in Japan are full of joy, color, and tradition. The Cherry Blossom Festival (Hanami) in March and April is one of the most beautiful events in the world — pink flowers bloom everywhere, people picnic under the trees, and the air feels magical. In Kyoto, the Gion Matsuri lights up the streets with giant floats, music, and street food. During the Tanabata Festival, people write their wishes on colorful papers and hang them on bamboo trees. If you’re visiting in winter, don’t miss the Snow Festival in Sapporo, where ice sculptures and snow slides turn the city into a white wonderland. Japan’s art and culture are something every traveller must feel. Try a traditional tea ceremony in Kyoto — calm, graceful, and filled with meaning. Dress like a Samurai or Ninja, learn their warrior ways, and take fun pictures. Practice calligraphy and origami, and understand how Japanese art teaches patience and precision. Watching a Kabuki Show, with its dramatic makeup and dance, is like stepping into ancient Japanese theatre. For nature lovers and adventure seekers, Japan’s hills and mountains offer breathtaking views. Mount Fuji, Japan’s most sacred mountain, is visible from Tokyo on clear days and is a must-see. The Japanese Alps in Nagano offer snow in winter and greenery in summer. Hakone Hills are famous for hot springs and peaceful lake views, while Mount Takao, just a short trip from Tokyo, is a beautiful hiking spot surrounded by nature and tradition. Looking for adventure? Hike through the Nakasendo Trail, passing through old Japanese post towns and wooden houses. Dive into the sea in Okinawa and discover coral reefs and colorful fishes. Enjoy skiing in Hokkaido, one of Asia’s top ski destinations. And for families and kids, Tokyo Disneyland and Universal Studios in Osaka bring fairy tales and fun to life. Japan’s wildlife is also unique and heartwarming. Visit Jigokudani Monkey Park, where snow monkeys bathe in hot springs — a truly rare sight. In Nara, you can feed gentle deer who bow to greet you. Ueno Zoo in Tokyo is one of the oldest zoos in Japan, perfect for kids. Near Okinawa, go for whale watching or sea turtle tours for an unforgettable experience in nature. No Japan trip is complete without trying the local food. Slurp a hot bowl of ramen, enjoy fresh sushi and sashimi, and taste grilled dishes like yakitori. Pick up a ready-made bento box and enjoy it in a garden or park. And don’t forget matcha — green tea that you’ll find in the form of tea, ice cream, cakes, and more."
  },
  {
    name: 'Nepal',
    image: Nepal,
    tours: 14,
    rating: 4.8,
    desc: "If you’re dreaming of snow-covered peaks, peaceful lakes, beautiful temples, and romantic moments — all without going too far or spending too much — then Nepal is the perfect honeymoon destination for you. Just next to India and visa-free for Indian citizens, Nepal offers the best of both worlds: spiritual depth and natural beauty, luxurious peace and thrilling adventure. Whether you’re a newlywed couple, a nature lover, or someone who wants to escape the city and reconnect with serenity, Nepal opens its heart with warmth and simplicity. For couples, Nepal is pure magic. Imagine sitting in a cosy lakeside café in Pokhara with your partner, watching the sun set behind the Himalayan mountains. Take a romantic boat ride on Phewa Lake, visit peaceful monasteries for couple blessings, or enjoy a jeep ride early morning to Sarangkot — where you can witness the golden sunrise rising above the clouds, hand in hand. Choose a mountain-view resort for a candle-light dinner under the stars, and don’t forget to click pictures in traditional Nepali dress with snow peaks in the background — memories that stay with you forever. Spiritually too, Nepal touches your soul. Start with a visit to Pashupatinath Temple in Kathmandu, one of the holiest temples of Lord Shiva, where chants and bells fill the air with energy. Just a few kilometres away, the Boudhanath Stupa offers peace like no other — a sacred Buddhist site surrounded by prayer flags and Tibetan culture. You can climb up to Swayambhunath, also known as the Monkey Temple, and enjoy a panoramic view of Kathmandu city while spinning prayer wheels and soaking in the calm. Walk through the grand Durbar Squares of Kathmandu, Patan, and Bhaktapur to witness ancient palaces, temples, and local heritage that feels both majestic and humble. When it comes to cities, Nepal has something for every type of traveller. Kathmandu is full of culture, street markets, and spirituality — perfect for walking tours and temple hopping. Pokhara is the crown jewel for honeymooners, with lakes, mountain views, paragliding, cafés, and nature trails all in one place. Lumbini, the birthplace of Lord Buddha, gives a deep spiritual experience that fills your heart with calm. If you want to feel the jungle life, Chitwan is the place — home to wildlife safaris, elephant rides, and peaceful riverside stays. And for a quick mountain escape, Nagarkot is ideal — wake up to the sunrise over the Himalayas and if lucky, catch a glimpse of Mount Everest on a clear day. For couples who love quiet time in nature, Nepal offers perfect settings. The gentle beauty of Phewa Lake, the fresh mountain breeze at Sarangkot, and the romantic stillness of the Garden of Dreams in Kathmandu create the perfect atmosphere for deep conversations and heartfelt moments. Stay in a hillside resort in Nagarkot, sip hot coffee while wrapped in a blanket, and watch the clouds roll past the peaks — it’s simplicity at its most beautiful. But if you seek adventure together, Nepal will not disappoint. Take a mountain flight to Mount Everest, a once-in-a-lifetime one-hour ride that offers jaw-dropping views of the world’s tallest peaks. Go on short treks in the Annapurna region or around Nagarkot — they are beginner-friendly and incredibly scenic. Try white-water rafting in the Trishuli River or go paragliding over Pokhara’s lakes and hills — thrilling and romantic at the same time. And for wildlife lovers, the Chitwan National Park gives you the chance to see rhinos, deer, crocodiles, and elephants on a guided safari, while Bardia National Park offers a more raw, less touristy jungle experience."
  },
  {
    name: 'Paris',
    image: paris,
    tours: 14,
    rating: 4.8,
    desc: "If there’s one city in the world made for romance, it’s Paris. From its charming cobbled streets and candle-lit cafés to the iconic Eiffel Tower and luxury shopping streets, Paris truly feels like a dream for honeymooners. It’s the kind of place where every street looks like a postcard, every evening feels magical, and every moment becomes a memory for life. One of the highlights of a Paris honeymoon is, of course, the Eiffel Tower. Standing tall in the heart of the city, this symbol of love is where couples from all over the world come to propose, take breathtaking photos, and dine under the stars. Whether you’re watching the sunset from the top or enjoying dinner at the tower’s elegant restaurant, it’s an experience you’ll cherish forever. For something truly special, take a private Seine River cruise in the evening. The soft music, glowing city lights, and fine French food create the perfect setting for a candlelight dinner on water. Watching the Eiffel Tower sparkle from the boat, with your partner beside you, feels nothing less than cinematic. Paris also offers some peaceful and elegant spots like the Luxembourg Gardens, where you can walk hand-in-hand among fountains and flowers or sit together and enjoy a quiet picnic. If you both appreciate art and culture, a visit to the world-famous Louvre Museum is a must. Home to the Mona Lisa and countless other masterpieces, it’s a beautiful place to explore and connect. For those who love fashion, fragrances, and shopping, the Champs-Élysées and Galeries Lafayette are like heaven. Whether you’re buying perfumes for each other or choosing a designer bag as a gift, these moments of joy add a sparkle to your trip. Take a romantic walk through Montmartre, where artists paint live on the streets, or step into the historic beauty of Notre-Dame Cathedral. With every step, Paris reveals its rich history, art, and elegance – and you’ll feel like you’re part of a beautiful love story. And then there’s the food – oh, the food! Imagine starting your mornings with warm French croissants, enjoying baguette sandwiches as you explore, and ending your day with a cheese platter and local wine. Don’t miss the crème brûlée or macarons for dessert – sweet, soft, and full of love. Bring home the memories with a miniature Eiffel Tower, some French perfumes, handmade chocolates, or a beautifully curated photo album from your professional couple photoshoot arranged by Meer Travels."
  },

  {
    name: 'Swizerland',
    image: Swizerland,
    tours: 14,
    rating: 4.8,
    desc: "Switzerland is not just a country; it’s a dream that every couple wants to live. With snow-covered Alps, beautiful lakes, cozy cottages, and the same villages where Bollywood created magic in movies like DDLJ – this land of romance welcomes you with open arms. Whether you wish to play in the snow, take a scenic train ride through the mountains, or simply enjoy a candle-light dinner by a lake – Switzerland has it all, and Meer Travels is here to make it unforgettable for you. Start your honeymoon with Interlaken, a stunning town surrounded by white mountains and lush valleys. It’s perfect for adventure-loving couples – you can try paragliding or take the romantic train to Jungfraujoch, the highest railway station in Europe, where you’ll find snow all year round. Every moment here feels like a fairytale. Then travel to the heart of nature at Lake Lucerne, where the blue water reflects the sky and mountains around. Take a candle-light cruise on the lake, walk hand-in-hand on the famous Chapel Bridge, and stay in a romantic lake-view room – ideal for cozy evenings and beautiful mornings. Next, explore Zermatt, a peaceful car-free village where the iconic Matterhorn mountain (the one on the Toblerone chocolate) stands tall. You can enjoy skiing or just relax in a luxury resort surrounded by snow. The calmness of this place will bring you both closer than ever. If you're looking for picture-perfect beauty, don’t miss Lauterbrunnen Valley – a heavenly village with 72 waterfalls, wooden cottages, and green meadows. It feels like you’ve entered a postcard. Perfect for couples who love nature, peace, and privacy. In cities like Zurich and Geneva, you get the perfect balance of modern life, shopping, lakeside cafés, and Indian food. These cities are great for a little city-style fun, museums, or even some luxury shopping before heading back. Switzerland is all about special experiences – like riding a cable car over snowy peaks, enjoying the Glacier Express train journey with glass windows showing magical views, or taking a private boat ride on Lake Geneva. Don’t miss a picnic at Mount Titlis, where you can play in the snow together. And of course, recreate the Bollywood romance with a professional photoshoot at the DDLJ bridge in Saanen – yes, the exact spot from the movie! When it comes to food, Switzerland is full of delicious romance. Try rich Swiss chocolates (Lindt & Toblerone are must-haves), enjoy a cheese fondue pot for two, and sip hot chocolate while watching snow fall outside your window. The Rösti, creamy mushroom dishes, and freshly baked breads make every meal a cozy affair. Take back memories with you – buy elegant Swiss watches, handmade scarves, truffles, or even a classic Swiss Army knife. And don’t forget to collect your honeymoon photo album that captures your love among the Alps."
  },
];

export default function Destinations() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  return (
    <section id="destinations" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mb-16 px-6">
          <span className="text-[#F6AA09] font-semibold text-sm uppercase tracking-wider 
  bg-slate-800 px-4 py-2 rounded-full inline-block mb-4">
            Popular Destinations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore the World's Most
            <span className="block text-transparent bg-clip-text bg-primary-gradient">
              Beautiful Places
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl text-center">
            Explore iconic destinations across the globe with our expertly crafted world tour packages
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  loading="lazy"
                  decoding="async"
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-semibold text-gray-800">{destination.rating}</span>
                </div>

                <div className='absolute bottom-0 left-0 right-0 p-6'>
                  <div className='flex items-end justify-between'>
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="w-5 h-5 text-teal-400" />
                        <span className="text-white font-semibold text-lg">{destination.name}</span>
                      </div>
                      <p className="text-gray-200 text-sm">{destination.tours} Tours Available</p>
                    </div>

                    <button onClick={() => setSelectedDestination(destination)} className="relative inline-flex items-center gap-2 text-sm font-semibold text-white group">

                      Read more

                      {/* Icon */}
                      <span className="transform transition-all duration-300 group-hover:translate-x-1">
                        →
                      </span>

                      {/* Underline */}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>

                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedDestination && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

            <div className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl overflow-hidden relative">

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-4 right-4 text-gray-900 hover:text-black text-xl z-50 "
              >
                ✕
              </button>

              {/* IMAGE */}
              <div className="h-64 overflow-hidden z-30">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8 space-y-4">

                {/* TITLE */}
                <h2 className="text-3xl font-bold text-gray-800">
                  {selectedDestination.name}
                </h2>

                {/* INFO */}
                <div className="flex items-center gap-6 text-sm text-gray-600">

                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-teal-500" />
                    {selectedDestination.name}
                  </div>

                  <div>
                    {selectedDestination.tours} Tours
                  </div>

                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    {selectedDestination.rating}
                  </div>

                </div>

                {/* DESCRIPTION */}
                <div className="max-h-72 overflow-y-auto pr-2">
                  <p className="text-gray-600 leading-relaxed">
                    {selectedDestination.desc}
                  </p>
                </div>

              </div>

            </div>

          </div>
        )}
      </div>
    </section>
  );
}
