import { MapPin, Star } from 'lucide-react';
import Kerala from "../assets/images/honeymoon/pexels-agull-guan-54513396-7814130.jpg"
import Tamilnadu from "../assets/images/honeymoon/pexels-ganesh-d-3490459-5213208.jpg"
import Karnataka from "../assets/images/indiaTour/pexels-ayush-paul-126769667-36446298.jpg"
import Tealangana from "../assets/images/indiaTour/sunset-mountains.jpg"
import Goa from "../assets/images/honeymoon/pexels-kitsun-yuen-49565104-7623126.jpg"
import Rajasthan from "../assets/images/indiaTour/pexels-sayan-samanta-1460859263-36213405.jpg"
import UttarPradesh from "../assets/images/indiaTour/pexels-daredevil-4533747.jpg"
import HimachalPradesh from "../assets/images/indiaTour/pexels-samkit-mehta-3807918-5643832.jpg"
import UTTRAKHAND from "../assets/images/indiaTour/pexels-aryasuraj-12369018.jpg"
import Asam from "../assets/images/indiaTour/pexels-icon0-733213.jpg"
import JammuandKashmir from "../assets/images/indiaTour/pexels-diana-lozovska-74116585-12062173.jpg"
import delhi from "../assets/images/indiaTour/pexels-ayush-800654-5076126.jpg"
import WestBengal from "../assets/images/indiaTour/moving-house-boat-river.jpg"
import { useState } from 'react';


const destinations = [
    {
        name: 'Kerala',
        image: Kerala,
        tours: 18,
        rating: 4.8,
        desc: "Explore the Best of Kerala with Meer Travels – Your Trusted Travel Partner Kerala, often called God's Own Country, is one of the most beautiful and culturally rich places in India. From old palaces and temples to peaceful beaches and colorful festivals, Kerala has something for everyone. Meer Travels brings you carefully chosen places and experiences that will make your trip truly special and unforgettable. Historical Places You Must Visit in Kerala Padmanabhapuram Palace is a beautiful wooden palace near the Tamil Nadu border, showing the royal life of the Travancore kings. In Fort Kochi, you can visit the Mattancherry Synagogue, one of the oldest, filled with lovely chandeliers and Hebrew writings. The Dutch Palace nearby is now a museum where you can see mythological paintings and European-style architecture. Fort Kochi itself is full of charm with old colonial buildings, street art, and cafés. Bekal Fort, located near the sea, is a large and scenic place, perfect for clicking photos, especially during sunset. Palakkad Fort is a peaceful fort built by Hyder Ali, surrounded by green landscapes. Edakkal Caves have ancient stone carvings that are thousands of years old and worth exploring. Famous Tourist Places in Kerala Kochi is a lively city with a mix of tradition and modern life. You’ll see Chinese fishing nets, art galleries, and spice markets here. Munnar is known for its tea gardens, cool breeze, and green hills — ideal for couples, families, and nature lovers. In Alleppey, you can enjoy a stay in a private houseboat and relax in the slow-moving backwaters. Thekkady offers jungle safaris, spice plantations, and bamboo rafting in Periyar Wildlife Sanctuary. Wayanad is full of waterfalls, forests, and peaceful spots for relaxation or trekking. Thrissur is famous for its Pooram festival, which includes elephants, music, and fireworks. Vagamon has pine forests, green valleys, and fresh air — perfect for adventure or peace. For beach lovers, Kovalam and Varkala are great spots for swimming, sunbathing, and Ayurvedic massages. Most Loved Beaches of Kerala Varkala Beach gives you stunning views from the cliffs, peaceful vibes, and yoga spots. Alleppey Beach is ideal for romantic evening walks by the sea. Marari Beach is a quiet and clean place, great for spending peaceful time with yourself or a loved one. Fort Kochi Beach lets you enjoy sea views along with colonial-era buildings nearby. Festivals That Show Kerala's Culture Onam is Kerala’s biggest celebration with flower decorations, traditional food, boat races, and cultural events. Vishu is the Malayali New Year, celebrated with lights, crackers, and good wishes. Thrissur Pooram is a grand event where you can see a parade of elephants, traditional music, and fireworks. Theyyam is a colorful dance ritual where artists perform in unique costumes and makeup, often in temples in North Kerala. Art and Dance That Show the Soul of Kerala Kathakali is a dance drama with big costumes and face makeup that tells stories from Indian epics. Mohiniyattam is a soft and graceful classical dance performed by women. Theyyam is not just a performance but a spiritual experience where dancers are believed to become gods during the show."
    },
    {
        name: 'Tamil Nadu',
        image: Tamilnadu,
        tours: 18,
        rating: 4.8,
        desc: "Walk Through Ancient Glory – Discover Tamil Nadu with Meer Travels Tamil Nadu is a land where history lives in every stone. With ancient temples, grand forts, and timeless monuments, it is the perfect place for those who love culture, tradition, and beautiful architecture. Every traveler who visits here feels connected to the glorious past. The Brihadeeswarar Temple in Thanjavur, also known as the Big Temple, is a thousand-year-old wonder built by the great Chola king Raja Raja Chola. It is a UNESCO World Heritage Site, famous for its huge Shiva lingam, tall temple tower (gopuram), and amazing stone carvings. In Madurai, the Meenakshi Amman Temple stands as the heart of the city. With its colorful towers and thousands of sculptures, this temple is not just a religious site but also a masterpiece of art. The evening aarti is a magical moment that fills your heart with peace. Fort St. George in Chennai tells a different story — of British times and colonial history. Built in 1644, this was the first English fortress in India. Even today, it houses government offices and a museum full of historic collections. Mahabalipuram is another treasure by the sea. Its ancient rock-cut caves, Shore Temple, and Arjuna’s Penance are living examples of Pallava dynasty’s art and devotion. The sea breeze and historical aura make this place very special. Rameswaram, one of the four Char Dham pilgrimage sites, is home to the famous Ramanathaswamy Temple. Its long corridors and 22 sacred wells attract pilgrims from all over the country. Your Travel Guide to Tamil Nadu – Brought to You by Meer Travels Tamil Nadu is full of surprises. Chennai is a big city where tradition and modern life go hand in hand. You can enjoy Marina Beach, visit old temples like Kapaleeswarar Temple, and sip on hot South Indian filter coffee. The Nilgiri hills welcome you to Ooty and Coonoor, where you’ll find misty mornings, toy train rides, tea gardens, and peaceful nature walks — perfect for couples and families. At the southern tip of India, Kanyakumari offers a unique view where the Bay of Bengal, Arabian Sea, and Indian Ocean meet. Watching the sunrise from here is an unforgettable experience. You can also visit the famous Vivekananda Rock Memorial and feel spiritual energy all around. Madurai, one of India’s oldest cities, is alive with local markets, delicious food, and deep culture. The grand Meenakshi Temple is the soul of this city. Rameswaram is not just for pilgrims. You can also visit the mysterious ghost town of Dhanushkodi and take a drive over the scenic Pamban Bridge. Thanjavur is known for temple architecture, the traditional Tanjore paintings, and rich classical music. Relax at the Beautiful Beaches of Tamil Nadu If you love beaches, Tamil Nadu won’t disappoint you. Marina Beach in Chennai is India’s longest urban beach. It’s perfect for evening walks, enjoying local snacks, and watching the sunset. Mahabalipuram Beach is a peaceful spot near historic monuments. It’s great for photography and even surfing. Kanyakumari Beach offers a special experience where you can see both sunrise and sunset at the same spot. The sea view with Vivekananda Rock in the background is simply magical. If you’re nearby, you can also explore the beaches of Pondicherry. Though it's technically a separate Union Territory, it's close to Tamil Nadu and offers a mix of French-style charm and sea breeze. Experience the Culture Through Tamil Nadu’s Festivals Festivals in Tamil Nadu are full of life, colors, music, and devotion. Pongal, the harvest festival in January, brings joy to every home with sweet dishes, kolams (rangoli), and family celebrations. The Chithirai Festival in Madurai celebrates the divine wedding of Meenakshi and Lord Sundareswarar with a grand procession and temple rituals. Thaipusam is celebrated with great devotion in places like Palani and Chennai, where devotees carry kavadi in honor of Lord Murugan. In Chidambaram, the Natyanjali Festival brings together classical dancers from all over India, who perform as an offering to Lord Nataraja. Discover the Soul of Tamil Nadu Through Its Arts Tamil Nadu’s rich cultural identity shines through its traditional art forms. Bharatanatyam, the state’s classical dance, is known for its graceful moves, storytelling, and deep expression. It is often performed in temples and cultural events. Carnatic music touches the soul with its beautiful compositions and is a major part of every cultural function. Villupattu is a unique folk storytelling style where stories are sung with rhythm using a bow-like instrument. It’s both entertaining and meaningful. Karagattam is a fun and skillful folk dance where artists balance pots on their heads and dance to traditional tunes. You can watch these performances during festivals and fairs. Plan Your Tamil Nadu Trip with Meer Travels Tamil Nadu has something for everyone — whether you want to visit holy temples, explore peaceful hill stations, enjoy beautiful beaches, or take part in colorful festivals. At Meer Travels, we offer custom tour packages that match your interest and budget. Whether you're looking for a temple tour, a quiet vacation in the hills, a beach honeymoon, or an art and culture experience, we’re here to make your trip smooth, memorable, and full of joy"
    },
    {
        name: 'Karnataka',
        image: Karnataka,
        tours: 15,
        rating: 5.0,
        desc: "Famous Monuments in Karnataka – A Walk Through History Karnataka is a state filled with grand monuments, ancient temples, and powerful stories of empires and faith. If you enjoy visiting places with historical charm, Karnataka will definitely amaze you. Hampi is one of the most famous places in Karnataka and is also a UNESCO World Heritage Site. Once the capital of the mighty Vijayanagara Empire, Hampi is full of stone temples, old markets, and royal ruins. Every part of this town feels like a journey into history. In Mysuru, the Mysore Palace stands as a shining example of royal life. Its grand design, shining lights in the evening, and beautiful paintings attract tourists from all over the world. During the Dussehra festival, the palace looks like a fairy-tale setting. Bijapur has the famous Gol Gumbaz, known for its giant dome and whispering gallery. If you whisper from one side, it can be clearly heard on the other side – it’s truly magical. Badami is home to rock-cut cave temples with beautiful carvings. These caves are dedicated to Lord Shiva and Lord Vishnu and offer peace, spirituality, and art in one place. Shravanabelagola is a sacred place for Jain devotees. It has a 57-feet tall statue of Lord Bahubali standing on a hilltop. The climb is worth it for the view and the spiritual experience. Top Travel Destinations in Karnataka – Curated by Meer Travels Karnataka is a mix of modern cities, calm hill stations, green forests, and spiritual beaches. Each place offers a different kind of joy. Bangalore is the capital city, full of life, technology, parks, shopping malls, and great food. It’s perfect for short breaks and modern stays. Coorg, also called Kodagu, is famous for coffee plantations, green hills, and fresh weather. Couples, families, and nature lovers all enjoy the beauty of this region. Chikmagalur is another peaceful hill station where you can stay in cozy resorts, visit coffee estates, and enjoy nature’s silence."
    },
    {
        name: 'Tealangana',
        image: Tealangana,
        tours: 10,
        rating: 4.9,
        desc: "Telangana is a state where history and culture go hand in hand. From grand forts to ancient temples, every monument tells a unique story of the past. Charminar in Hyderabad is the most famous landmark. Built over 400 years ago, it stands in the heart of the old city. Tourists love taking photos here and exploring the nearby markets full of bangles, pearls, and traditional food. Golconda Fort is another major attraction. It was once a strong and powerful kingdom. Today, visitors enjoy walking through its massive gates and watching the sound-and-light show that brings its royal past to life. The Qutb Shahi Tombs are peaceful and beautiful. These domes are built in Persian style and are the final resting place of Hyderabad’s early kings. In Warangal, you’ll find the Thousand Pillar Temple. This ancient Hindu temple is known for its stunning carvings and unique structure that reflects the fine craftsmanship of that era. Warangal Fort is another reminder of the region’s glorious past. Its giant stone gateways and temple ruins still carry the pride of the Kakatiya dynasty. Top Cities and Tourist Spots in Telangana Hyderabad is the capital and the heart of Telangana. Known as the City of Pearls, it is famous for its biryani, rich nawabi culture, and historical places like Charminar, Chowmahalla Palace, and Ramoji Film City. The city perfectly blends the old and the new. Warangal is a city filled with ancient stories. Its temples, forts, and lakes make it a wonderful destination for those who love heritage and calm surroundings. Nagarjuna Sagar is peaceful and scenic. It has a huge dam, green landscapes, and a deep connection to Buddhist history. Boating here is a very relaxing experience. Nirmal and Adilabad are known for their forests, waterfalls, and tribal culture. These places are ideal for nature lovers and those who want to experience rural life. Bhadrachalam is a holy town located on the banks of the Godavari River. It is dedicated to Lord Rama and is a popular pilgrimage site, especially during festivals like Ramnavami."
    },
    {
        name: 'Goa',
        image: Goa,
        tours: 20,
        rating: 4.7,
        desc: "Goa’s Heritage & Monuments – Feel the Portuguese Past Goa has a rich colonial history that you can still see in its monuments and churches. The Basilica of Bom Jesus is one of the most important sites here. It’s a UNESCO World Heritage Site and houses the remains of St. Francis Xavier. Se Cathedral is one of the largest churches in Asia and is famous for its grand Portuguese-style architecture. It’s a calm and spiritual place. Aguada Fort is a sea-facing fort where you can see the old lighthouse and enjoy sunset views. It’s also a great place for photography. Chapora Fort became famous after the Bollywood movie Dil Chahta Hai. The view from here of the Arabian Sea is truly beautiful and perfect for your travel photos. Top Cities to Explore in Goa Panaji, also called Panjim, is the capital city of Goa. It’s clean, calm, and full of cultural charm. You’ll find churches, river cruises, and lovely old houses here. Mapusa is known for its lively markets, local street food, and shopping. It’s perfect for getting a taste of Goan life. Margao is the main city in South Goa. It has colonial-style buildings, peaceful streets, and a mix of history and local life. Vasco da Gama is a port town that is often overlooked, but it has some hidden beaches and a quiet lifestyle. It’s a great place if you want to explore something different. Goan Food – Spicy, Fresh and Full of Flavour Goa is a paradise for food lovers. A typical fish thali is simple, spicy, and absolutely delicious. Other must-try dishes include prawn curry rice, Goan Xacuti, Vindaloo, and the sweet dessert Bebinca. If you enjoy trying local drinks, don’t forget to sip on Feni – a famous Goan drink made from cashew or coconut. You can relax at beach cafés and enjoy your meal while listening to music and watching the waves. Goa Festivals – Full of Fun, Music, and Dance Goa is also known for its colourful festivals. The Goa Carnival happens around February or March and is full of parades, music, costumes, and dancing in the streets. Shigmo is Goa’s own version of Holi. It includes traditional folk dances, colours, and beautiful processions. During Christmas and New Year, Goa is at its best. Churches are decorated, parties go on all night, and the entire state lights up with joy. Sao Joao Festival is celebrated in June. It’s a fun monsoon festival where people jump into wells and enjoy rain dances and music. Goa’s Culture – A Blend of East and West Goa’s culture is a mix of Indian and Portuguese influences. You’ll hear Konkani music, see traditional folk dances, and enjoy the sound of guitars in small cafés. There are many old heritage homes, art galleries, and Latin-style quarters in places like Fontainhas where you can feel the artistic and cultural side of Goa."
    },
    {
        name: 'Rajasthan',
        image: Rajasthan,
        tours: 14,
        rating: 4.8,
        desc: "Explore the Magic of Rajasthan with Meer Travels – Where Every Fort Tells a Royal Tale Rajasthan, the land of kings, is a place where history comes alive through grand forts, royal palaces, colorful markets, and warm hospitality. From the golden sands of Jaisalmer to the romantic lakes of Udaipur, every part of Rajasthan offers a unique experience. It’s a state full of traditions, folk songs, desert adventures, and flavors that leave a lasting memory. With Meer Travels, your Rajasthan journey becomes even more special — filled with real experiences, comfort, and royal charm. Royal Forts and Palaces – A Walk into the Glorious Past When you visit Rajasthan, the forts and palaces are a must-see. Start with Amber Fort in Jaipur, which stands proudly on a hill. You can enjoy an elephant ride up the fort or attend the light and sound show in the evening. In Jodhpur, the grand Mehrangarh Fort gives you panoramic views and stories of brave kings. Jaisalmer Fort, made of golden stone, looks like a fairytale castle rising from the desert. Udaipur’s City Palace stands by the lake and is perfect for romantic photography. If you’re looking for something less crowded but equally beautiful, Junagarh Fort in Bikaner is full of mirror work, royal halls, and history. Famous Cities You Must Explore Rajasthan has cities that are full of color and character. Jaipur, known as the Pink City, is perfect for shopping in Johari Bazaar, seeing the Hawa Mahal, and enjoying Rajasthani culture at Chokhi Dhani. Jaisalmer, also called the Golden City, offers desert safaris, camel rides, and night camping under the stars. Udaipur is known for its lakes and palaces, where you can take a boat ride on Lake Pichola and visit Jag Mandir. Jodhpur, the Blue City, has narrow streets, local snacks, and the majestic Mehrangarh Fort. Pushkar is peaceful and spiritual with its famous Brahma Temple and sacred lake, while Ranthambore is perfect for jungle lovers who want to see tigers and wild animals. Flavors of Rajasthan – Every Bite Tells a Story Rajasthani food is full of taste and tradition. The famous dal baati churma is a delicious combination of crispy baati, spicy dal, and sweet churma. Laal maas is a spicy mutton curry that’s not for the faint-hearted. You should also try ker sangri, gatte ki sabzi, mirchi vada, pyaaz kachori, and creamy rabdi. Enjoy a kulhad of masala chai in the morning and sweet lassi in a clay pot during your market walk. Culture and Colours – Feel the Real Rajasthan"
    },

    {
        name: 'Uttar Pradesh',
        image: UttarPradesh,
        tours: 14,
        rating: 4.8,
        desc: "Uttar Pradesh is not just a state, it’s the soul of India. Every city here has a story to tell – whether it’s the sacred Ganga flowing through Varanasi, the divine presence in Ayodhya, or the timeless beauty of the Taj Mahal in Agra. This is a land where spirituality, history, culture, and food come together in the most colorful and unforgettable way. Meer Travels invites you to explore UP with comfort, ease, and real local experiences. Walk the Spiritual Path – Where Faith Lives On UP is home to some of the holiest cities in the world. Varanasi, one of the oldest living cities, welcomes you with the sound of temple bells, peaceful boat rides on the Ganga, and the famous evening Ganga Aarti at Dashashwamedh Ghat. Ayodhya, the birthplace of Lord Ram, now shines with the newly built Ram Mandir, and the Saryu River Aarti fills hearts with devotion. Mathura and Vrindavan take you into Lord Krishna’s world with their charming temples, soulful bhajans, and the joyful celebration of Holi. In Prayagraj, the sacred sangam of Ganga, Yamuna, and Saraswati draws lakhs of pilgrims, especially during the grand Kumbh Mela. A Journey Through Time – Historical Wonders and Royal Charm Uttar Pradesh is not just about temples – it’s full of heritage. Agra is home to the world-famous Taj Mahal, a symbol of love that leaves everyone speechless. Don’t miss Agra Fort and Mehtab Bagh for the perfect view of the monument. Just a short drive away is Fatehpur Sikri, the historic city built by Emperor Akbar, with Buland Darwaza welcoming you grandly. Lucknow, the city of nawabs, offers a mix of culture, art, and taste. Visit Bara Imambara, take a walk through old lanes, try the delicious Tunday Kababs, and shop for beautiful chikankari clothes. Sarnath near Varanasi is another gem – a calm place where Lord Buddha gave his first sermon after enlightenment. Flavours of UP – Spicy, Sweet and Full of Love Uttar Pradesh food is like its people – warm, rich, and full of variety. In Lucknow, the melt-in-mouth Tunday Kababs are a must. In Agra and Mathura, start your day with bedai and jalebi – crispy, spicy, and sweet all in one plate. Don’t miss Banarasi chaat – tangy, crunchy and addictive. And if you’re in Varanasi in winter, malaiyo will melt your heart. Cool it off with a thick, creamy glass of lassi served with lots of love. Festivals of Light, Color and Faith UP knows how to celebrate. Diwali in Ayodhya is magical, with lakhs of diyas lighting up the ghats and temples. Holi in Vrindavan is like no other – play with colors, sing Krishna bhajans, and dance in joy. Prayagraj hosts the grand Kumbh Mela, where millions come to take a dip in the holy waters. And in Varanasi, the Dev Deepawali is a night you’ll never forget – thousands of oil lamps glowing on the river banks, making the whole city look divine."
    },
    {
        name: 'Himachal Pradesh',
        image: HimachalPradesh,
        tours: 14,
        rating: 4.8,
        desc: "Himachal Pradesh – Land of Hills, Peace & Adventure If you’re dreaming of snow-capped mountains, green valleys, calm rivers, and fresh air, then Himachal Pradesh is calling you. This beautiful hill state is perfect for couples, families, friends, and even solo travellers. Whether you want to relax, explore or go on an adventure — Himachal has it all. Shimla – The Queen of Hills Shimla is one of the most famous hill stations in India. You can take a peaceful walk on Mall Road, click photos near the Christ Church, or visit Jakhoo Temple for a panoramic view of the town. Kufri is nearby and great for snow activities, especially in winter. Shimla is ideal for both romantic honeymoons and family trips. Manali – A Blend of Romance and Thrill Manali is a favourite for adventure lovers and honeymoon couples. From paragliding in Solang Valley to exploring the ancient Hidimba Temple, every corner has something special. If the roads are open, a trip to Rohtang Pass or the Atal Tunnel is unforgettable. In winters, you’ll find snow everywhere — in summers, you’ll see green mountains and fresh rivers. Kasol & Parvati Valley – Nature and Peace Together For people who want to relax and connect with nature, Kasol is the place. Sit by the riverside cafés, enjoy Israeli food, or go on a trek to Kheerganga or Tosh village. It’s popular with backpackers, photographers, and peace seekers. You’ll find the true mountain vibe here. Dharamshala & McLeodganj – Feel the Tibetan Spirit These twin towns are full of spiritual and cultural vibes. Visit the Dalai Lama Temple, take a walk to Bhagsunag Waterfall, or just enjoy a plate of hot momos with mountain tea. It’s a great destination for solo trips or peaceful escapes. Spiti Valley – A Hidden Gem of the Himalayas"
    },

    {
        name: 'Uttrakhand',
        image: UTTRAKHAND,
        tours: 14,
        rating: 4.8,
        desc: "Uttarakhand – Mountains, Temples & Spiritual Peace Uttarakhand is a beautiful state in North India where the mountains meet the sky, rivers flow with purity, and temples give you inner peace. Whether you are looking for adventure, relaxation, or spirituality — Uttarakhand has something for everyone. Haridwar and Rishikesh – Sacred Towns on the Ganga Haridwar and Rishikesh are two of the holiest places in India. In Haridwar, you can take a dip in the Ganga at Har Ki Pauri and feel blessed during the Ganga Aarti in the evening. Just a short drive away, Rishikesh offers peace in its ashrams, yoga centres, and riverbanks. It is also known as the adventure capital of India, where you can try river rafting, bungee jumping, and camping by the river. Mussoorie – The Queen of Hills Mussoorie is a famous hill station near Dehradun. The fresh air, scenic views, and peaceful roads make it perfect for couples and families. You can enjoy walking on Mall Road, ride the cable car to Gun Hill, and take a trip to Kempty Falls for a refreshing day. It’s a great place to escape the heat and enjoy nature. Nainital – The Lake City Nainital is known for its beautiful Naini Lake where boating is a must. You can also visit Snow View Point, Tiffin Top, and Naina Devi Temple. The Tibetan Market and Mall Road are great for shopping and food. Nainital is a perfect weekend getaway for people from Delhi and nearby cities. Char Dham Yatra – A Journey of Faith The Char Dham Yatra is one of the most spiritual experiences in India. It includes four sacred places — Yamunotri, Gangotri, Kedarnath, and Badrinath. Each temple is located in the Himalayas and has a deep connection with our religious beliefs. Many people from across the country visit these places every year to seek blessings and peace of mind. Jim Corbett National Park – Wildlife and Nature Jim Corbett is India’s first and oldest national park. Located in the Nainital district, it’s famous for its tiger population. A jeep safari here gives you a chance to see wild animals like elephants, deer, leopards, and birds in their natural habitat. It’s a great place for family vacations and nature lovers. Auli – Snow Paradise of Uttarakhand Auli is one of the best places in India for snow activities. It’s famous for skiing, cable car rides, and panoramic views of the Himalayas. In winter, Auli turns into a white wonderland, making it perfect for adventure lovers and honeymoon couples. Local Food of Uttarakhand – Simple and Delicious The food of Uttarakhand is full of flavour and made from local ingredients. Aloo Ke Gutke is a spicy potato dish that is served with chutney. Kafuli is a curry made with green leafy vegetables. Almora is known for its special sweet called Bal Mithai. If you want to try authentic Garhwali food, don’t miss Chainsoo and Jhangora Kheer. Festivals of Uttarakhand – Culture, Devotion & Joy Haridwar hosts the grand Kumbh Mela every 12 years, where millions of devotees gather to take a holy dip. Ganga Dussehra is another important festival where people worship Maa Ganga and offer diyas in the river. In the hills, Nanda Devi Fair brings local music, dance, and joy to the people. These festivals reflect the rich culture and strong faith of Uttarakhand."
    },

    {
        name: 'Asam',
        image: Asam,
        tours: 14,
        rating: 4.8,
        desc: "Assam – Land of Tea Gardens, Wildlife & Culture Assam is one of the most beautiful states in North East India. It is blessed with green hills, peaceful rivers, wild forests, and a culture that is simple yet vibrant. From wildlife to temples, tea gardens to river islands — Assam offers a unique travel experience that touches both nature and soul. Kaziranga – The Land of One-Horned Rhino Kaziranga National Park is one of the biggest highlights of Assam. It is the home of the famous one-horned rhinoceros, along with elephants, deer, wild buffalo, and beautiful birds. Early morning jeep safaris and elephant rides are the best way to explore the jungle. If you love nature or wildlife photography, Kaziranga is a dream come true. Kamakhya Temple – Power and Devotion Together Located on Nilachal Hill in Guwahati, the Kamakhya Temple is one of the most powerful Shakti Peethas in India. Devotees from all over the country come here to seek blessings of Goddess Kamakhya. The temple also offers a lovely view of the Brahmaputra River and the entire city of Guwahati. Majuli – The River Island That Lives With Culture Majuli is the world’s largest river island, right in the middle of the Brahmaputra River. It is a quiet and peaceful place, famous for its old Vaishnavite monasteries called Satras. Here, you can witness traditional dance, music, mask-making, and pottery — all in a very simple and soulful setting. Manas National Park – Nature’s Hidden Gem If you want to explore wildlife without the crowd, Manas is a perfect choice. It is a UNESCO World Heritage Site, full of natural beauty and rare animals like golden langurs, clouded leopards, and tigers. The forest is calm and magical, especially during sunrise and sunset safaris. Dibrugarh and Jorhat – Walk Through the Tea Gardens Assam is known all over the world for its tea. The towns of Dibrugarh and Jorhat are surrounded by green tea gardens. You can walk through the plantations, learn how tea is made, and enjoy a fresh cup of Assam tea while sitting in the lap of nature. It’s a very relaxing experience. Sualkuchi – The Village of Silk Sualkuchi is called the Manchester of the East because of its silk weaving. Here, artisans make beautiful sarees using Assam’s famous Muga and Eri silk. You can visit their homes and workshops to see the handloom work and even buy pure silk sarees directly from the weavers. Food of Assam – Simple, Healthy, and Full of Flavour The traditional food of Assam is mild, homely, and filled with natural taste. A typical Assamese thali includes rice, lentils, vegetables, and fish curry. Masor Tenga is a tangy fish curry that’s very popular. Khaar is a special dish made with papaya or pulses. During festivals, people enjoy Pitha and Laru – sweet dishes made with rice, coconut, and sesame. Festivals of Assam – Full of Dance, Music & Joy Bihu is the heart of Assam’s culture. It is celebrated three times a year — Rongali Bihu in April, Bhogali Bihu in January, and Kongali Bihu in October. During Bihu, people dance, sing, wear traditional clothes, and enjoy local food. Another unique festival is the Ambubachi Mela at Kamakhya Temple, where thousands of people gather for spiritual energy and devotion. Jorhat also hosts the Tea Festival, which includes dance shows, tea garden tours, and cultural programs"
    },

    {
        name: 'Jammu and Kasmir',
        image: JammuandKashmir,
        tours: 14,
        rating: 4.8,
        desc: "Jammu & Kashmir – Heaven on Earth Jammu & Kashmir is truly one of the most beautiful regions in India. With snow-covered mountains, peaceful lakes, green gardens, old temples, and the rich Kashmiri culture — this place feels like a dream. Whether you are planning a honeymoon, a family holiday, a solo trip, or a spiritual journey, Jammu & Kashmir has something for everyone. Srinagar – The Soul of Kashmir The beauty of Srinagar lies in its calm Dal Lake, where a shikara ride is a must. You can stay in a traditional houseboat and wake up to the sound of water and mountains all around. The Mughal Gardens like Nishat Bagh and Shalimar Bagh are filled with flowers and history. Local markets are full of beautiful Kashmiri shawls, dry fruits, handcrafts, and pure saffron — perfect for shopping and taking a bit of Kashmir home with you. Gulmarg – Where Snow Meets Adventure Gulmarg is a paradise for snow lovers. In winter, it turns into a white wonderland, ideal for skiing and snowboarding. The famous Gondola cable car gives breathtaking views of the snow-covered mountains. In summer, the same place is covered with green meadows and wildflowers, offering a completely different but equally beautiful view. Pahalgam – The Valley of Shepherds Pahalgam is known for its peaceful riverbanks and thick pine forests. It’s a quiet place where you can go for horse riding, river rafting, or just sit near the Lidder River. Trekkers love Pahalgam because it’s also the base point for the Amarnath Yatra. If you are looking for a calm and green escape, this is the place. Sonmarg – The Meadow of Gold Sonmarg is surrounded by snow peaks and glaciers, making it a picture-perfect destination. Whether it’s pony rides to Thajiwas Glacier, camping under the stars, or clicking photographs with snow all around — Sonmarg offers unforgettable memories. Vaishno Devi – A Journey of Faith Located in Katra, the temple of Maa Vaishno Devi is one of the most important spiritual sites in India. People walk 13 kilometers uphill with faith in their hearts. Ponies, palkis, and helicopter services are also available. The route is well-organized and full of devotion, making it suitable for both young and elderly devotees. Jammu City – Temples and Traditions Jammu, the winter capital, is known for its culture, temples, and local Dogri food. Visit Raghunath Temple, Bahu Fort, and Bagh-e-Bahu Garden. Don’t forget to try traditional dishes like Kalaadi cheese and the Jammu-style rajma chawal. The city's mix of spiritual and cultural experiences will make your trip complete. Kashmiri Food – Full of Flavour and Love Kashmiri cuisine is rich and full of royal taste. Non-veg lovers must try Rogan Josh, Gushtaba, and Yakhni — delicious mutton dishes cooked in curd and spices. Kahwa and Noon Chai are traditional teas that keep you warm in the chilly weather. Vegetarian food lovers can enjoy Modur Pulao, sweet saffron rice with dry fruits, and of course, Jammu’s famous rajma chawal. Festivals – When Kashmir Comes Alive Every spring, the Tulip Festival in Srinagar fills Asia’s largest tulip garden with colors and joy. In Jammu, Lohri and Baisakhi bring music, food, and happiness to the streets. Eid and Shivratri are celebrated across the state with love and unity. The Amarnath Yatra is a once-in-a-lifetime spiritual journey, where lakhs of devotees visit the snow-cave shrine of Lord Shiva every year."
    },

    {
        name: 'Delhi',
        image: delhi,
        tours: 14,
        rating: 4.8,
        desc: "Delhi is not just the capital of India — it’s a feeling! A place where history meets modern life, where every street has a story, and where people come from all over the world to experience its charm. From old Mughal forts and peaceful temples to busy markets and mouth-watering street food — Delhi gives you everything in one city. Old Meets New – Best Places to See in Delhi Start with the Red Fort, built by Shah Jahan. It’s a symbol of India’s heritage, and the evening light and sound show brings its history to life. Just nearby is Jama Masjid — one of India’s biggest mosques. If you climb its minaret, you’ll get a full view of Old Delhi’s magic. At India Gate, you’ll feel a sense of pride. This war memorial looks stunning at night with its lights and fountains. And if you love tall monuments, Qutub Minar is perfect — a beautiful 12th-century structure that takes you back in time. For peace and quiet, visit the Lotus Temple — a calm space open to all religions, shaped like a blooming lotus. Akshardham Temple is another gem. It’s huge, with amazing carvings, exhibitions, and a water show that’s truly unforgettable. If you’re interested in India’s government buildings, go near Rashtrapati Bhavan and Parliament House. These grand buildings are a mix of British and Indian architecture — you can even book a guided tour to see the inside. Shopping in Delhi – Every Lane Has a Market If you love fashion, Sarojini Nagar is a paradise with trendy clothes at throwaway prices. For cool cafes and handicrafts, Janpath and Connaught Place are the perfect mix of old charm and new style. Chandni Chowk is a whole different world — crowded, colorful, and full of traditional clothes, wedding items, and sweet-spicy chaat. Don’t forget Delhi Haat! It’s like a mini-India, where artists from every state come to sell their handmade items — from Kashmiri shawls to Rajasthani juttis. Taste Delhi – Food That Melts Your Heart Delhi’s food is as famous as its monuments. Have hot Chole Bhature from Sitaram or Karol Bagh — the kind that fills your soul. Old Delhi’s Paratha Wali Gali will surprise you with its variety of stuffed parathas. If you’re a non-veg lover, don’t miss Butter Chicken — Moti Mahal and Aslam’s serve it best. For street food, go anywhere and you’ll find Golgappe, Dahi Bhalla, and Aloo Tikki that are full of flavour. And if you’ve got a sweet tooth, Jalebi with Rabri is pure heaven! Festivals in Delhi – Lights, Colours, and Celebrations Delhi celebrates every festival with full heart. The Republic Day Parade on 26th January is something you must see once in life — tanks, dancers, and soldiers marching with pride at Rajpath. During Diwali, the whole city glows like gold. Holi is all about fun, especially around India Gate and Lodhi Garden. Dussehra at Ramlila Maidan shows Ramayana live on stage, with fireworks and big crowds. Whether it’s Eid, Christmas, or any other festival — in Delhi, every religion is celebrated with love."
    },

    {
        name: 'West Bengal',
        image: WestBengal,
        tours: 14,
        rating: 4.8,
        desc: "West Bengal is a place where every corner has something special to offer. From the busy streets of Kolkata to the peaceful tea gardens of Darjeeling, from the deep mangrove forests of Sundarbans to the calm beaches of Digha, this state is full of variety and beauty. It is a perfect mix of history, tradition, festivals, food, art, and natural wonders. Kolkata, also known as the City of Joy, is full of life. You can see old British-style buildings, yellow taxis, street food stalls, trams, and local art everywhere. A visit to Victoria Memorial takes you back in time, while the Howrah Bridge shows the strength and soul of the city. For spiritual peace, people go to the famous Kalighat and Dakshineswar temples. If you want to enjoy nightlife, music and food, then Park Street is the best place in the city. In the hills, Darjeeling offers beautiful views, cool weather, and fresh tea gardens. You can watch the sunrise at Tiger Hill, take a ride on the toy train, and enjoy the peaceful feeling of the mountains. The tea estates here are famous across the world, and the local people are warm and welcoming. If you love wildlife and nature, Sundarbans is a great choice. It is the home of the Royal Bengal Tiger and the largest mangrove forest in the world. You can take a boat ride in the rivers, see rare birds and animals, and feel close to nature. For a more cultural trip, you can visit Shantiniketan, the place created by Rabindranath Tagore. It is calm, artistic and full of learning and creativity. Those who love the sea can relax at Digha or Mandarmani. These are popular beach spots where you can enjoy the sound of the waves, eat fresh seafood, and spend quality time with family or friends. The local markets are also good for small shopping and souvenirs. Festivals in Bengal are full of colour and emotion. Durga Puja is the biggest celebration, when the whole state is decorated with lights, idols and music. Other festivals like Poila Baisakh, Rath Yatra, Kali Puja and Christmas at Park Street show the cultural spirit of Bengal. The food of West Bengal is full of taste and love. Fish curry, mustard hilsa, luchi-aloo dum, rasgulla, sandesh and Kolkata biryani are just some of the local favourites. Each dish has a unique flavour, and you can find tasty street food in every city. Shopping is also fun in West Bengal. In Kolkata’s New Market, you can find clothes, bags and local items. Kumartuli is the place where idols are made by hand — a very special thing to see. College Street is a dream place for book lovers, and in Darjeeling you can buy tea, woollen clothes, and handicrafts."
    },
];

export default function IndiaTour() {
    const [selectedDestination, setSelectedDestination] = useState(null);
    return (
        <section id="destinations" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-30"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center text-center mb-16 px-4">

                    <span className="text-[#F6AA09] font-semibold text-sm uppercase tracking-wider 
  bg-slate-800 px-4 py-2 rounded-full inline-block mb-4">
                        India Tour
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                        Explore our best India Tour in

                        <span className="block text-transparent bg-clip-text bg-primary-gradient mt-2">
                            Best Places
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl">
                        Discover breathtaking destinations that will make your travel dreams come true
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
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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


                            <button
                                onClick={() => setSelectedDestination(null)}
                                className="absolute top-7 right-4 
                  bg-primary-gradient 
                  text-white 
                  w-10 h-10 
                  rounded-full 
                  flex items-center justify-center 
                  shadow-lg 
                  hover:scale-110 
                  transition"
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
