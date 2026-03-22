import { MapPin, Star } from 'lucide-react';
import { useState } from 'react';
import Kashmir from '../assets/images/honeymoon/pexels-umair-pir-26953782-36627785.jpg'
import Kerala from "../assets/images/honeymoon/pexels-agull-guan-54513396-7814130.jpg"
import Goa from "../assets/images/honeymoon/pexels-kitsun-yuen-49565104-7623126.jpg"
import Meghalaya from "../assets/images/honeymoon/pexels-ec-lipse-263453583-36282115.jpg"
import malaysia from "../assets/images/malaysia.jpg"
import Manali from "../assets/images/honeymoon/pexels-ihsan-tajik-3151386-36564270.jpg"
import DARJEELING from "../assets/images/honeymoon/pexels-abdulkayum97-19000373.jpg"
import ANDMANNICOBAR from "../assets/images/honeymoon/pexels-zamgraphy-7954230.jpg"
import ooty from "../assets/images/honeymoon/pexels-ganesh-d-3490459-5213208.jpg"
import Lakshadweep from "../assets/images/honeymoon/pexels-pok-rie-33563-587015.jpg"



const destinations = [
    {
        name: 'Kashmir',
        image: Kashmir,
        tours: 12,
        rating: 4.9,
        desc: "Kashmir – Jannat for Honeymoon Couples Kashmir is not just a place, it's an emotion – a dreamland where love meets nature. Snow-covered mountains, peaceful valleys, and shikara rides on Dal Lake create the perfect setting for newlyweds looking to start their life together with beauty, peace, and togetherness. It is truly Jannat on Earth, and the most romantic destination for Indian honeymooners. Your journey begins in Srinagar, the heart of Kashmir, where you can enjoy a peaceful shikara ride on Dal Lake, just the two of you surrounded by floating gardens and mountains. A stay on a traditional houseboat, with candle-light dinner and cozy bedding under the stars, brings unmatched charm. Don’t miss walking hand-in-hand in the Mughal Gardens like Nishat Bagh and Shalimar Bagh, where every flower blooms like your new love story. Explore Lal Chowk, the local market, and shop for hand-embroidered Kashmiri shawls, souvenirs, and spices. Next, you can escape to Gulmarg, a white paradise. The famous Gondola cable car ride takes you above the snow-capped peaks, offering views that feel straight out of a fairy tale. Whether you try skiing, click snow-draped couple photos, or simply play in the snow together, every moment in Gulmarg becomes a lifelong memory. Then comes Pahalgam, a serene valley with the crystal-clear Lidder River flowing beside you. Couples can go for horse rides to Betaab Valley, enjoy camping, or relax near bonfires, sipping Kahwa and watching the stars. It’s peaceful, romantic, and close to nature. For couples visiting in summer, Sonmarg is a must. Known as the Meadow of Gold, this place is filled with flowers, scenic glaciers, and picnic spots perfect for sweet moments. Just sit down with your partner, soak in the view, and let nature bless your bond. While in Kashmir, food becomes a celebration too. Relish the royal Rogan Josh, creamy Gushtaba, and sip on hot Kahwa, a saffron and almond-flavored green tea that warms both body and heart. Sweet dishes like Phirni, served in clay pots, make every meal feel special. As a memory, take home not just photos but pieces of Kashmir – like luxurious pashmina shawls, handmade carpets, organic dry fruits, and real saffron. You can also dress up in traditional Kashmiri attire and capture those unforgettable moments in a professional couple photoshoot."
    },
    {
        name: 'Kerala',
        image: Kerala,
        tours: 18,
        rating: 4.8,
        desc: "Kerala – The Perfect Honeymoon Destination Romantic, peaceful, and full of natural beauty — Kerala is truly God’s Own Country and one of the most beautiful places in India to begin your married life. If you're planning your first trip as a couple, Kerala promises a honeymoon filled with unforgettable moments, calm surroundings, and intimate experiences that bring two hearts even closer. Imagine staying in Alleppey on a private houseboat, gently floating on backwaters surrounded by coconut trees and calm waters. The peaceful silence, the beauty of nature, and a candlelight dinner under the stars create the perfect setting for romance and deep conversations. This is privacy and love at its purest. Then, move into the misty hills of Munnar, where the tea gardens stretch as far as your eyes can see. The cool mountain breeze, the cozy cottages, and the fog-covered mornings make every walk and every photo extra special. Whether you're sipping tea together on a balcony or strolling through the gardens, Munnar offers peace and bonding like no other. For couples who enjoy adventure and nature, Thekkady offers a unique jungle experience. From bamboo rafting to spice plantation visits, and even an elephant ride together, every moment here adds something exciting to your honeymoon. Staying in eco-lodges amidst thick greenery lets you both disconnect from the world and connect with each other. When you want to feel the sand beneath your feet and the sea breeze on your face, head to Kovalam or Varkala. These beaches are clean, less crowded, and perfect for evening walks hand-in-hand. An Ayurvedic couple massage by the sea, dinner at an ocean-view restaurant, and watching the sun dip into the water — it all feels like a scene from a romantic film. And then there’s the food — Kerala’s cuisine is a joy to explore together. From fresh seafood and coconut-rich curries to banana-leaf meals and sweet Payasam, every dish is a new memory. Add to that the aroma of freshly brewed filter coffee in the hills, and your mornings will be just as memorable. The best time to visit Kerala for a honeymoon is from October to March, when the weather is cool and pleasant. But if you love rain and greenery, the monsoon season (June to September) brings a romantic charm of its own — perfect for cozying up indoors while watching the rain fall on the lush landscapes. Meer Travels makes your Kerala honeymoon even more special with carefully planned packages that suit your style and budget. Whether you want a mix of houseboat, hills, and beach, or prefer to stay in one place and relax, everything is customized just for you. From private car and trusted driver to room decorations, candlelight dinners, and support in your own language — we take care of everything, so you can focus on each other."
    },
    {
        name: 'Goa',
        image: Goa,
        tours: 15,
        rating: 5.0,
        desc: "Beaches. Music. Romance. Memories. Goa is not just a destination, it's a celebration of love. Whether you’re looking for fun and excitement or peace and privacy, Goa gives you the best of both worlds — making it the perfect choice for your honeymoon. Start your journey in North Goa, where the energy is young and vibrant. Dance at beach parties in Baga and Anjuna, watch the sunset from the iconic Chapora Fort, or explore the buzzing night markets and stylish beach cafés. For the adventurous duo, try parasailing, jet skiing, or a thrilling banana boat ride — because love is also about having fun together! When you wish to slow things down and enjoy quiet, magical moments, head to South Goa. Walk barefoot on the soft sands of Palolem and Butterfly Beach, enjoy a candlelight dinner by the sea with your partner, and stay at private resorts that offer beautiful couple spa services and peaceful ocean views. South Goa is a dream for those who seek intimacy, calm, and soulful bonding. For something truly unique, visit Fontainhas — the Latin Quarter of Goa. These colorful Portuguese-style streets are straight out of a romantic movie. They make the perfect backdrop for your honeymoon photoshoot and offer a taste of old-world charm. Enjoy cute cafés, local art galleries, and hand-in-hand walks through quiet, charming lanes. Make memories with romantic activities like kayaking on calm rivers, cruising into the sunset while listening to Goan music, enjoying beachside massages, or shopping for handmade souvenirs together. And of course, Goa’s food is a journey in itself. Share plates of prawn curry, chicken cafreal, or a spicy Goan fish thali. Don’t miss Bebinca, Goa’s most loved dessert, along with fresh coconut water or locally made cashew drinks. Dining by the beach under a starlit sky is an experience you’ll never forget. The best time to visit Goa for your honeymoon is from October to March, when the breeze is cool and the beaches are lively. December adds a magical charm with Christmas and New Year celebrations. If you love romantic rains and green landscapes, the monsoon season (June to September) is another dreamy option with fewer crowds and cozy resort stays. When you book with Meer Travels, your honeymoon becomes effortless and extra special. We offer customized honeymoon packages for every budget — whether it’s a quick 2N/3D getaway or a long romantic escape. From private airport pick-ups to beach-view resorts with room decorations, candlelight dinners, relaxing spa combos, guided tours, and free couple photoshoots — we handle it all. And our 24/7 support ensures you feel cared for, every step of the way."
    },
    {
        name: 'Meghalaya',
        image: Meghalaya,
        tours: 10,
        rating: 4.9,
        desc: "Romantic waterfalls, peaceful hills & clouds all around. If you’re a couple looking for peace, fresh air, and nature’s purest beauty, then Meghalaya is truly a dream come true. The word Meghalaya itself means Abode of Clouds, and when you’re there, it actually feels like you’re walking through heaven, hand in hand. Begin your journey in Shillong, also known as the Scotland of the East. The cool climate, friendly locals, and scenic surroundings make it a charming start to your honeymoon. Take a quiet boat ride on Ward’s Lake, stroll through couple-friendly cafés and cozy markets, and don’t miss watching the sunset from Shillong Peak or enjoying the mist near Elephant Falls. Next, dive into the romance of Cherrapunji, a place where the rains make everything magical. Here, nature takes over — from dramatic waterfalls like Nohkalikai and Seven Sisters Falls, to quiet valleys hidden in the clouds. Explore ancient caves, walk together in the rain, and stay in a beautiful hillside cottage where every morning feels like a painting coming to life. If privacy and peace are what you crave, then Mawlynnong will steal your hearts. Crowned as Asia’s Cleanest Village, it offers bamboo walkways, lush gardens, and local homestays that make you feel at home. Climb to the Sky View Point for stunning couple selfies with endless greenery in the backdrop. It’s a place where time slows down — just enough to let love bloom. Complete your romantic getaway with a visit to Dawki, where the river water is so clear it feels like you're floating in the sky. A boat ride on the Umngot River is one of the most surreal and peaceful experiences for couples, surrounded by nature, silence, and only each other. And of course, food is love — especially in Meghalaya! Share a plate of Jadoh, a delicious rice and meat dish, or try the warm and tangy flavors of Bamboo Shoot Curry. For the more curious foodies, Tungrymbai — a fermented soybean delicacy — is a must-try. As the cold evening settles, hold hands over cups of hot local tea and soulful soups in the hills. Meghalaya is not just a place you visit; it’s a feeling you take back with you. Let Meer Travels make your honeymoon here smooth, soulful, and special — because the most beautiful love stories are written in places where even the clouds come down to witness your love."
    },
    {
        name: 'Malaysia',
        image: malaysia,
        tours: 20,
        rating: 4.7,
        desc: "Malaysia is the perfect mix of city lights, nature, beaches, and peace — ideal for couples who want both fun and privacy on their honeymoon. Whether you want to click romantic selfies at tall towers or enjoy quiet moments on a beach, Malaysia gives you everything, that too in budget. With Meer Travels, you can explore the most beautiful couple-friendly places, while we handle everything from hotels to candle-light dinners. Begin your honeymoon in Kuala Lumpur, the modern heart of Malaysia. Holding hands at the famous Petronas Twin Towers, walking the sky bridge and watching the city lights sparkle at night feels magical. Don’t miss the KL Tower Sky Deck, where the whole city glows under your feet. For young couples, the Bukit Bintang area is perfect – full of street food, live music, shopping, and energy. Want a quiet, cute date? Visit Aquaria KLCC, where you walk through a tunnel surrounded by sharks and colorful fishes. And after a long day, enjoy rooftop candle-light dinners at luxury hotels – it’s affordable but feels 5-star. If you both love beaches, then Langkawi is the most romantic island. Ride together on the Langkawi Sky Bridge – it feels like walking in the sky, holding your partner close. Stay in private beach resorts with ocean views, and you’ll be surprised how budget-friendly they are. Go for an island-hopping cruise, enjoy snorkeling, explore the mangrove forest on a quiet boat ride, or just relax with a sunset dinner and couple massage by the beach. Every moment becomes a memory here. For nature lovers, Cameron Highlands is like a mini Shimla. The cool weather, green tea gardens, strawberry farms, and waterfalls make it a calm and romantic retreat. You can book beautiful nature resorts in ₹3,000–₹5,000 per night — peaceful, scenic, and affordable. Enjoy jungle walks together or just sit on your balcony sipping hot tea in the misty hills. Want a little fun and thrill? Head to Genting Highlands – just a short ride from KL. The cable car ride through clouds is breathtaking. Once on top, explore everything — casino, shopping malls, indoor and outdoor theme parks, Snow World, VR games, and much more. It’s a mix of romance and fun, all in one place. Malaysia is also known for its clean and peaceful beaches. Langkawi has long white beaches and water adventures. If you want privacy, go to Tioman Island or Perhentian Islands, where it’s less crowded and more romantic. For couples who want a short beach trip near the city, Port Dickson (just 1.5 hours from KL) is perfect. And the food — it's delicious and desi-friendly. Try Nasi Lemak, the national dish with rice, egg, sambal, and curry. Love paratha? Then Roti Canai will become your favorite. For non-veg lovers, there’s delicious satay (BBQ meat skewers). And don’t worry – you’ll find Indian veg and halal food everywhere, from roadside stalls to nice restaurants. Sip on Teh Tarik, Malaysia’s own strong chai – perfect for chai-loving couples!"
    },
    {
        name: 'Manali',
        image: Manali,
        tours: 14,
        rating: 4.8,
        desc: "Snowy mountains, fresh air, and cozy moments that turn into lifelong memories. Nestled in the heart of Himachal, Manali is more than just a destination — it’s an emotion for honeymoon couples. Whether you dream of playing in snow, seeking adventure, or simply spending peaceful time in each other’s arms, Manali has everything to make your honeymoon truly unforgettable. Begin your journey at Solang Valley, where snow-covered peaks welcome you with open arms. From skiing and tube sliding to riding a snow scooter together, every moment is filled with excitement and joy. A cable car ride above the valley gives you picture-perfect mountain views — ideal for winter romance and Instagram-worthy memories. In the lap of nature lies the peaceful Hidimba Devi Temple, surrounded by tall deodar trees and spiritual calmness. Couples often dress up in traditional Himachali attire here and get beautiful photos clicked that look straight out of a fairytale. For nature lovers, a short trek to Jogini Waterfalls brings quiet time amidst greenery, the soothing sound of water, and the perfect setting for a romantic picnic. It’s one of those hidden gems where you can just sit, talk, and enjoy each other’s company. Wander into the charm of Old Manali, a blend of art, music, and mountain life. Walk hand-in-hand through peaceful lanes, sip apple cider in rustic cafés, and enjoy live music by the river. This place has a creative, cozy vibe that brings couples closer. If weather permits, take a drive to the legendary Rohtang Pass. It’s a snow lover’s dream with breathtaking views, thrilling roads, and the chance to build a snowman together. For adventurous couples, this spot is nothing short of magical. Manali also offers beautiful experiences you’ll cherish forever — go river rafting on the Beas River, try paragliding in Solang, shop for handmade woollens, and enjoy a romantic candlelight dinner with the mountains watching over you. Don’t forget to explore the flavors of Himachal. Share a hot plate of sidu, enjoy fresh trout fish, or warm up with a bowl of thukpa and momos. And of course, nothing beats a cup of hot coffee and steaming Maggi in the hills, with your soulmate by your side."
    },

    {
        name: 'DARJEELING',
        image: DARJEELING,
        tours: 14,
        rating: 4.8,
        desc: "Peaceful weather, tea-scented air, and toy trains winding through green hills — Darjeeling is a dreamy escape for honeymooners. It’s a place where love blooms slowly, surrounded by snow peaks and quiet moments that turn into forever memories. Start your journey aboard the iconic Darjeeling Himalayan Railway, a UNESCO World Heritage toy train that chugs gently through hills and valleys. The rhythmic sound of the train, coupled with misty views, makes it a timeless experience to share as a couple. Sit close, click pictures, and enjoy the mountain breeze together. One of the most magical moments awaits you at Tiger Hill, where early mornings bring a golden sunrise over the majestic Kanchenjunga. As the snow-covered peaks light up with the first rays of the sun, hold a warm cup of tea and soak in the romance of nature’s beauty — it’s a memory you’ll cherish for a lifetime. Darjeeling is also known for its lush tea gardens that stretch endlessly across gentle slopes. Walk hand-in-hand through the Happy Valley Tea Estate, breathe in the fresh aroma of tea leaves, and enjoy a private tea-tasting session. It’s peaceful, scenic, and perfect for couple photography in nature’s lap. For a moment of spiritual calm, visit the Peace Pagoda — a serene Buddhist temple with panoramic views of the town and hills. Whether you sit quietly or admire the architecture together, the place offers a unique sense of connection and peace. As evening approaches, take a stroll down Mall Road. The cheerful vibe of local cafés, souvenir shops, and street food stalls makes it an ideal place for casual fun and sweet little surprises. You can shop for handmade woollens, chocolates, and cute couple gifts to take home. And of course, Darjeeling’s food is as warm as its weather. Share plates of steaming momos, slurp flavorful thukpa, and try rich butter tea. For dessert, visit Glenary’s Café for their famous pastries and coffee, with a view of the misty mountains. Darjeeling offers the perfect mix of charm, calm, and closeness — everything a couple needs to begin their journey of love. Let Meer Travels craft your personalized honeymoon experience in this hill-station paradise."
    },
    {
        name: 'ANDMAN NICOBAR',
        image: ANDMANNICOBAR,
        tours: 14,
        rating: 4.8,
        desc: "If you’re dreaming of snow-covered peaks, peaceful lakes, beautiful temples, and romantic moments — all without going too far or spending too much — then Nepal is the perfect honeymoon destination for you. Just next to India and visa-free for Indian citizens, Nepal offers the best of both worlds: spiritual depth and natural beauty, luxurious peace and thrilling adventure. Whether you’re a newlywed couple, a nature lover, or someone who wants to escape the city and reconnect with serenity, Nepal opens its heart with warmth and simplicity. For couples, Nepal is pure magic. Imagine sitting in a cosy lakeside café in Pokhara with your partner, watching the sun set behind the Himalayan mountains. Take a romantic boat ride on Phewa Lake, visit peaceful monasteries for couple blessings, or enjoy a jeep ride early morning to Sarangkot — where you can witness the golden sunrise rising above the clouds, hand in hand. Choose a mountain-view resort for a candle-light dinner under the stars, and don’t forget to click pictures in traditional Nepali dress with snow peaks in the background — memories that stay with you forever. Spiritually too, Nepal touches your soul. Start with a visit to Pashupatinath Temple in Kathmandu, one of the holiest temples of Lord Shiva, where chants and bells fill the air with energy. Just a few kilometres away, the Boudhanath Stupa offers peace like no other — a sacred Buddhist site surrounded by prayer flags and Tibetan culture. You can climb up to Swayambhunath, also known as the Monkey Temple, and enjoy a panoramic view of Kathmandu city while spinning prayer wheels and soaking in the calm. Walk through the grand Durbar Squares of Kathmandu, Patan, and Bhaktapur to witness ancient palaces, temples, and local heritage that feels both majestic and humble. When it comes to cities, Nepal has something for every type of traveller. Kathmandu is full of culture, street markets, and spirituality — perfect for walking tours and temple hopping. Pokhara is the crown jewel for honeymooners, with lakes, mountain views, paragliding, cafés, and nature trails all in one place. Lumbini, the birthplace of Lord Buddha, gives a deep spiritual experience that fills your heart with calm. If you want to feel the jungle life, Chitwan is the place — home to wildlife safaris, elephant rides, and peaceful riverside stays. And for a quick mountain escape, Nagarkot is ideal — wake up to the sunrise over the Himalayas and if lucky, catch a glimpse of Mount Everest on a clear day. For couples who love quiet time in nature, Nepal offers perfect settings. The gentle beauty of Phewa Lake, the fresh mountain breeze at Sarangkot, and the romantic stillness of the Garden of Dreams in Kathmandu create the perfect atmosphere for deep conversations and heartfelt moments. Stay in a hillside resort in Nagarkot, sip hot coffee while wrapped in a blanket, and watch the clouds roll past the peaks — it’s simplicity at its most beautiful. But if you seek adventure together, Nepal will not disappoint. Take a mountain flight to Mount Everest, a once-in-a-lifetime one-hour ride that offers jaw-dropping views of the world’s tallest peaks. Go on short treks in the Annapurna region or around Nagarkot — they are beginner-friendly and incredibly scenic. Try white-water rafting in the Trishuli River or go paragliding over Pokhara’s lakes and hills — thrilling and romantic at the same time. And for wildlife lovers, the Chitwan National Park gives you the chance to see rhinos, deer, crocodiles, and elephants on a guided safari, while Bardia National Park offers a more raw, less touristy jungle experience."
    },

    {
        name: 'Ooty',
        image: ooty,
        tours: 14,
        rating: 4.8,
        desc: "Wrapped in mist, filled with the scent of tea gardens, and blessed with mountain breezes — Ooty is a dreamy honeymoon destination for couples who crave calm, charm, and cozy moments. Nestled in the Nilgiri Hills of Tamil Nadu, this hill station offers a magical setting to celebrate love and new beginnings. Start your journey at the serene Ooty Lake, where you and your partner can enjoy paddle boating or a romantic shikara-style ride. As the sun dips low, sit by the lakeside with snacks and soft laughter — it’s a perfect start to a peaceful evening. Stroll hand-in-hand through the Botanical Gardens, surrounded by vibrant flowers and manicured lawns — an ideal backdrop for couple photoshoots and quiet talks. One of the most charming experiences awaits you aboard the Nilgiri Mountain Railway Toy Train. This slow, scenic ride takes you through lush valleys, tea plantations, and charming tunnels — a truly timeless journey where the world slows down just for you two. For those who love nature and breathtaking views, a visit to Doddabetta Peak, the highest point in Ooty, is a must. Catch the sunrise or sunset from here and capture those golden-hour moments together. Don't miss a romantic tea estate walk, where you can tour tea factories, taste fresh brews, and walk amidst green plantations — the aroma of tea and the peace of nature creating the perfect mood for bonding. When it comes to stay, Ooty offers cozy cottages and heritage bungalows with vintage charm and modern comforts. Many honeymoon stays include room decoration, bonfires, and candlelight dinners that make your nights just as memorable as your days. Let your taste buds fall in love too — with hot masala tea, South Indian delicacies, fresh Ooty chocolates, homemade jams, and warm comfort food like carrot halwa and steaming soup with toast — just what you need for chilly evenings. Whether you're dreaming of boat rides, mountain views, or quiet mornings in a tea garden, Ooty gives you the romance, relaxation, and freshness every honeymoon deserves. With Meer Travels, your Ooty honeymoon is planned to perfection — full of love, laughter, and lifetime memories."
    },

    {
        name: 'Lakshadweep',
        image: Lakshadweep,
        tours: 14,
        rating: 4.8,
        desc: "Imagine walking barefoot on powdery white sand, holding your partner’s hand as the sun melts into the Arabian Sea. Welcome to Lakshadweep — a serene, untouched island destination perfect for couples seeking peace, privacy, and postcard-perfect beauty. Unlike crowded beach destinations, Lakshadweep offers pure seclusion and an intimate experience amidst turquoise waters and coral gardens. Start your romantic journey at Agatti Island, where you can snorkel through crystal-clear lagoons, dive with colorful fishes, or simply lie on the beach and soak in the stillness. With calm waters and powdery shores, it's an ideal place to relax, reconnect, and refresh. For couples dreaming of an unforgettable sunset, Bangaram Island is the crown jewel of Lakshadweep. Often called the most beautiful island in the group, it offers surreal views, beachside candlelight dinners, and a magical golden hour — all wrapped in tranquility. Kavaratti Island, the capital, offers a mix of comfort and culture. You can stay in luxurious sea-facing rooms, visit the marine aquarium, go kayaking, or enjoy paddle boating together. It's perfect for those who want a balance of romance and local experiences. What makes Lakshadweep truly special for honeymooners is its peaceful charm. You won’t find noisy crowds or busy beaches here — just the two of you, the sea breeze, and soft waves as your soundtrack. Whether you're snorkeling over coral reefs, watching the sunrise from your cottage, or enjoying a quiet moment on a private beach — every second here feels like a dream. For your stay, choose from beachfront eco-huts, private cottages, or luxury resorts designed for couples. Many islands have exclusive accommodations just for honeymooners, offering privacy, comfort, and curated romantic experiences."
    },
];

export default function Honeymoon() {
    const [selectedDestination, setSelectedDestination] = useState(null);

    return (
        <section id="destinations" className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-xl opacity-30"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center text-center mb-24 px-6">

                    <span className="text-[#F6AA09] font-semibold text-sm uppercase tracking-wider 
  bg-slate-800 px-4 py-2 rounded-full inline-block mb-4">
                        HONEYMOON PACKAGES
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 leading-tight max-w-3xl">

                        Explore our best Honeymoon
                        <span className="block text-transparent bg-clip-text bg-primary-gradient mt-2">
                            Packages in India
                        </span>

                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl">
                        Create unforgettable romantic memories with our specially curated honeymoon destinations
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
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 will-change-transform"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

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
