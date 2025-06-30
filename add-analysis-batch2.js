import { MongoClient, ObjectId } from "mongodb";

const MONGODB_URI = "mongodb+srv://jocelyncf:idvLvNUj0y9jNQtO@grupoc.myft7qs.mongodb.net/seriesAnalysisDB?retryWrites=true&w=majority";

// Análisis adicionales para completar todas las series
const analisisAdicionales = [
    {
        title: "Wednesday Addams: Subversión Gótica en la Era Moderna",
        slug: "wednesday-subversion-gotica-era-moderna",
        content: `# Wednesday Addams: Subversión Gótica en la Era Moderna

## La Reimaginación de un Ícono

Wednesday de Netflix, creada por Alfred Gough y Miles Millar, toma el icónico personaje de Wednesday Addams y lo transporta a una academia contemporánea, creando una serie que es tanto homenaje como reinvención. La serie logra capturar la esencia del personaje original mientras la adapta para una nueva generación.

## Jenna Ortega: Embodying Darkness

Jenna Ortega's portrayal of Wednesday Addams is nothing short of iconic. Her performance captures the character's trademark deadpan delivery, morbid fascination, and unexpected vulnerability. Ortega brings a fresh interpretation that honors Christina Ricci's memorable performance while establishing her own version of the character.

The famous dance sequence became a cultural phenomenon, demonstrating how a single moment can capture the zeitgeist and become a defining element of a character's legacy.

## Nevermore Academy: Gothic Meets Contemporary

Nevermore Academy serves as the perfect setting for exploring themes of otherness, belonging, and identity. The school, designed for "outcasts," creates a microcosm where different types of supernatural beings must coexist, providing rich ground for exploring prejudice, acceptance, and social dynamics.

## The Mystery of the Hyde

The central mystery involving the Hyde creature provides the procedural backbone of the series, but its real strength lies in how it explores themes of transformation, control, and the monster within. The revelation that Tyler is the Hyde adds complexity to the narrative and Wednesday's character development.

## Enid and Wednesday: Unlikely Friendship

The relationship between Wednesday and her roommate Enid represents one of the series' emotional cores. Their friendship, built on mutual respect despite fundamental differences, demonstrates that connection can transcend personality conflicts and cultural differences.

## Family Legacy and Expectations

The series explores how family history and expectations shape identity. Wednesday's relationship with her parents, particularly her mother Morticia, reveals the complex dynamics of living up to family legacy while forging one's own path.

## Social Commentary Through Gothic Lens

Wednesday uses its gothic aesthetic and supernatural elements to comment on contemporary social issues: social media, environmental destruction, institutional corruption, and the treatment of marginalized communities.

## The Addams Family Values

Despite the dark humor and gothic aesthetics, the series reinforces the core Addams Family value: unconditional love and acceptance within the family unit, regardless of how strange or different family members might be.`,
        excerpt: "Un análisis de cómo Wednesday reinventa un ícono gótico para explorar temas de identidad, pertenencia y diferencia en la era moderna.",
        tags: ["wednesday", "gotico", "identidad", "academia"],
        author: {
            name: "Prof. Victoria Black",
            avatar: "https://via.placeholder.com/40"
        },
        status: "published",
        readTime: 10,
        views: 4891,
        likes: 245,
        createdAt: new Date("2024-11-28"),
        updatedAt: new Date("2024-11-28"),
        publishedAt: new Date("2024-11-28")
    },
    {
        title: "The White Lotus: Sátira Social en el Paraíso",
        slug: "white-lotus-satira-social-paraiso",
        content: `# The White Lotus: Sátira Social en el Paraíso

## El Resort como Microcosmos Social

The White Lotus de Mike White utiliza el setting aparentemente idílico de un resort de lujo para crear una sátira punzante sobre privilegio, clase social y turismo. Cada temporada presenta un nuevo resort y un nuevo grupo de huéspedes, pero los temas permanecen consistentemente relevantes.

## Murray Bartlett como Armond: El Servicio como Performance

Murray Bartlett's performance as Armond in the first season is a masterclass in passive-aggressive hospitality. His character represents the service industry's hidden resentments and the psychological toll of maintaining a facade of perfection for entitled guests.

## La Primera Temporada: Hawaii y el Colonialismo

The Hawaiian setting of the first season adds layers of meaning about colonialism, cultural appropriation, and the commercialization of indigenous culture. The series doesn't shy away from addressing how tourism can be a form of modern colonialism.

## Class Warfare in Paradise

Each guest represents different aspects of wealth and privilege, from new money tech entrepreneurs to old money families to middle-class families stretching their budgets. The series explores how class dynamics play out even in spaces designed for leisure and relaxation.

## The Inevitability of Tragedy

Both seasons begin with the knowledge that someone will die, creating a sense of inevitability that colors every interaction. This structure allows the series to examine how small tensions and resentments can escalate to tragic consequences.

## Sicily and Sexual Politics

The second season, set in Sicily, shifts focus to sexual politics and marital dynamics while maintaining the series' sharp social commentary. The Italian setting allows for exploration of different cultural attitudes toward sexuality and relationships.

## Wealth as Insulation and Prison

The series consistently shows how wealth can both insulate people from consequences and trap them in cycles of dissatisfaction and entitlement. The characters' money doesn't protect them from tragedy; often, it contributes to it.

## The Performance of Vacation

The White Lotus examines how vacation itself has become a performance, especially in the social media age. Characters are constantly curating their experiences for others rather than genuinely enjoying them.`,
        excerpt: "Un análisis de cómo The White Lotus utiliza el setting de resort de lujo para crear una sátira social sobre privilegio y clase.",
        tags: ["the-white-lotus", "satira", "clase-social", "privilegio"],
        author: {
            name: "Dr. Amanda Foster",
            avatar: "https://via.placeholder.com/40"
        },
        status: "published",
        readTime: 11,
        views: 3567,
        likes: 178,
        createdAt: new Date("2024-11-25"),
        updatedAt: new Date("2024-11-25"),
        publishedAt: new Date("2024-11-25")
    },
    {
        title: "Yellowjackets: Trauma, Supervivencia y Mitología Femenina",
        slug: "yellowjackets-trauma-supervivencia-mitologia",
        content: `# Yellowjackets: Trauma, Supervivencia y Mitología Femenina

## Supervivencia y Primitivismo

Yellowjackets explora cómo la civilización es una construcción frágil que puede colapsar rápidamente bajo presión extrema. El accidente aéreo no solo aisla físicamente a las chicas, sino que las libera de las normas sociales que previamente definían sus identidades.

## Shauna y Jackie: Amistad Tóxica

La relación entre Shauna y Jackie representa una de las dinámicas de amistad más complejas de la televisión reciente. Su codependencia, celos y resentimientos mutuos ilustran cómo las amistades adolescentes pueden ser tanto formativas como destructivas.

## Lottie y el Misticismo

Charlotte Matthews' descent into mysticism and apparent psychic abilities raises questions about mental illness, spiritual awakening, and the human need for meaning in chaos. Her transformation into a cult-like leader reflects how desperate people will follow anyone who offers certainty.

## Natalie: Survivalist and Skeptic

Natalie represents practical survival skills and skepticism of the group's increasing mysticism. Her hunting abilities make her valuable, but her resistance to the group's developing mythology creates tension.

## Taissa: Ambition and Dissociation

Taissa's political ambitions in the present timeline contrast with her mysterious behavior in the wilderness. Her sleepwalking and apparent dissociative episodes suggest different ways of coping with trauma.

## The Symbol and Ritual

The mysterious symbol and the rituals that develop around it explore how humans create meaning and structure even in the most chaotic circumstances. The question of whether supernatural forces are real or psychological projections remains deliberately ambiguous.

## Cannibalism as Taboo and Necessity

The series builds toward the inevitable cannibalism through careful character development and escalating desperation. When it finally happens, it feels both shocking and inevitable, a natural progression of their moral degradation.

## Adult Trauma and Secrets

The present-day timeline shows how the wilderness experience continues to shape the survivors decades later. Their shared secret creates both a bond and a burden that affects all their relationships.

## Female Violence and Power

Yellowjackets presents female characters who are capable of extreme violence and moral compromise, challenging stereotypes about women and aggression while exploring how trauma can transform people.

## The Wilderness as Character

The Canadian wilderness becomes almost a character itself, beautiful and threatening, providing and withholding resources, seemingly responding to the girls' actions and decisions.`,
        excerpt: "Un análisis de cómo Yellowjackets explora trauma, supervivencia y la fragilidad de la civilización a través de su narrativa única.",
        tags: ["yellowjackets", "trauma", "supervivencia", "misticismo"],
        author: {
            name: "Dra. Rachel Green",
            avatar: "https://via.placeholder.com/40"
        },
        status: "published",
        readTime: 13,
        views: 4234,
        likes: 198,
        createdAt: new Date("2024-11-22"),
        updatedAt: new Date("2024-11-22"),
        publishedAt: new Date("2024-11-22")
    },
    {
        title: "Andor: La Revolución Personal en Star Wars",
        slug: "andor-revolucion-personal-star-wars",
        content: `# Andor: La Revolución Personal en Star Wars

## Groundedness in the Galaxy

Andor represents the most grounded entry in the Star Wars canon, focusing on the personal and political costs of rebellion rather than mystical forces or chosen ones. Tony Gilroy has created a series that feels both distinctly Star Wars and refreshingly different.

## Cassian's Journey from Survivor to Revolutionary

Diego Luna's Cassian Andor begins as someone simply trying to survive under Imperial oppression. His transformation into a committed revolutionary is gradual and convincing, driven by personal loss and increasing awareness of systemic injustice.

## The Banality of Evil

The series shows how fascism operates through bureaucracy and casual cruelty rather than dramatic villainy. Imperial officers are petty, ambitious, and bureaucratic, making their evil feel more real and threatening.

## Maarva Andor: The Revolutionary Mother

Adria Arjona's Maarva represents the generation that remembers freedom and refuses to accept Imperial rule as normal. Her quiet resistance and eventual sacrifice inspire others to action.

## Luthen Rael: The Cost of Revolution

Stellan Skarsgård's Luthen embodies the moral complexity of revolutionary leadership. His willingness to sacrifice individuals for the greater cause makes him both admirable and troubling.

## Mon Mothma: Political Resistance

Genevieve O'Reilly's Mon Mothma shows how political resistance requires different skills and sacrifices than military resistance. Her navigation of Imperial politics while secretly funding rebellion is its own form of heroism.

## The Personal Cost of Politics

The series consistently shows how political resistance affects families and personal relationships. Characters must choose between personal happiness and political commitment.

## World-Building Without Jedi

Andor proves that Star Wars can work without Jedi or Force users by focusing on compelling characters and political drama. The series expands the universe while staying grounded in recognizable human emotions and conflicts.

## Hope as a Revolutionary Act

The series shows how hope itself becomes a form of resistance under oppressive regimes. Characters fight not because victory is certain, but because fighting is the only way to maintain their humanity.`,
        excerpt: "Un análisis de cómo Andor redefine Star Wars al enfocarse en la resistencia política y el costo personal de la revolución.",
        tags: ["andor", "star-wars", "revolucion", "resistencia"],
        author: {
            name: "Prof. Marcus Weber",
            avatar: "https://via.placeholder.com/40"
        },
        status: "published",
        readTime: 12,
        views: 5678,
        likes: 267,
        createdAt: new Date("2024-11-20"),
        updatedAt: new Date("2024-11-20"),
        publishedAt: new Date("2024-11-20")
    },
    {
        title: "The Bear: Trauma Culinario y Sanación en la Cocina",
        slug: "the-bear-trauma-culinario-sanacion-cocina",
        content: `# The Bear: Trauma Culinario y Sanación en la Cocina

## La Cocina como Campo de Batalla

The Bear transforms a small Chicago sandwich shop into a battlefield where personal and professional traumas play out daily. The series uses the high-pressure environment of a restaurant kitchen as a metaphor for how trauma affects all aspects of life.

## Carmy's Grief and Perfectionism

Jeremy Allen White's Carmen "Carmy" Berzatto carries grief over his brother's suicide, PTSD from high-end restaurant culture, and the impossible task of saving a failing business. His perfectionism becomes both his strength and his weakness.

## The Original Beef Crew

The existing staff at The Original Beef represents working-class Chicago in all its complexity. Each character brings their own trauma and coping mechanisms to the toxic but familial environment of the restaurant.

## Richie: Loyalty and Resistance to Change

Ebon Moss-Bachrach's Richie embodies resistance to change while simultaneously representing the importance of loyalty and family bonds. His relationship with the late Michael creates conflict with Carmy's new methods.

## Sydney: Ambition Meets Reality

Abby Elliott's Sydney represents culinary ambition colliding with harsh reality. Her education and idealism clash with the practical challenges of keeping a struggling restaurant afloat.

## The Cycle of Kitchen Abuse

The series doesn't romanticize restaurant culture; it honestly depicts how abuse and trauma cycle through kitchen environments. Characters who were abused often become abusers themselves, perpetuating toxic patterns.

## Food as Love and Violence

Food in The Bear represents both nourishment and weapon. Characters express love through cooking but also use food service as a form of control and aggression.

## Mental Health and Masculinity

The series explores how men cope with trauma and mental health issues, showing both healthy and unhealthy coping mechanisms without judgment.

## Chicago as Character

The city of Chicago becomes a character itself, with its working-class ethos, food culture, and economic pressures shaping every aspect of the characters' lives.

## Transformation and Healing

Despite its intense atmosphere, The Bear is ultimately about healing and transformation. Characters slowly learn to support each other and break cycles of abuse and trauma.`,
        excerpt: "Un análisis de cómo The Bear utiliza la cultura de cocina para explorar trauma, masculinidad y sanación en la clase trabajadora.",
        tags: ["the-bear", "trauma", "cocina", "masculinidad"],
        author: {
            name: "Chef Maria Santos",
            avatar: "https://via.placeholder.com/40"
        },
        status: "published",
        readTime: 11,
        views: 3890,
        likes: 189,
        createdAt: new Date("2024-11-18"),
        updatedAt: new Date("2024-11-18"),
        publishedAt: new Date("2024-11-18")
    },
    {
        title: "Shōgun: Honor, Poder y Cultura en el Japón Feudal",
        slug: "shogun-honor-poder-cultura-japon-feudal",
        content: `# Shōgun: Honor, Poder y Cultura en el Japón Feudal

## Adaptación Cinematográfica Magistral

La adaptación de FX de Shōgun, basada en la novela de James Clavell, representa una nueva altura en la televisión histórica. La serie combina producción de primera clase con respeto cultural y narrativa compleja para crear una experiencia inmersiva.

## John Blackthorne: El Forastero

Cosmo Jarvis's John Blackthorne serves as the audience's entry point into feudal Japan, but the series avoids making him a white savior. Instead, he becomes a tool in larger political games while gradually learning to respect Japanese culture.

## Toranaga vs. Ishido: Political Maneuvering

The central conflict between Lord Toranaga and Lord Ishido represents a masterclass in political strategy and power dynamics. Their chess match affects the fate of all Japan while revealing the complexity of feudal politics.

## Mariko: Cultural Bridge

Anna Sawai's Mariko serves as translator and cultural bridge, but her character transcends the typical "helpful native" stereotype. Her own political motivations and personal struggles make her a fully realized character.

## The Code of Bushido

The series explores how the samurai code of honor (Bushido) affects every aspect of life and death in feudal Japan. Characters must navigate between personal desires and social obligations.

## Cultural Authenticity

Unlike many Western depictions of Japan, Shōgun strives for cultural authenticity in language, customs, and worldview. The Japanese characters feel like real people rather than exotic stereotypes.

## Violence and Ritual

Violence in Shōgun is never casual; it's always ritualized and meaningful within the cultural context. Seppuku, combat, and punishment all follow specific cultural rules that the series respects.

## Women's Power in Patriarchal Society

The series shows how women in feudal Japan wielded power within patriarchal constraints, using intelligence, cultural knowledge, and strategic marriages to influence events.

## Religion and Politics

The conflict between Buddhism, Shintoism, and Christianity adds another layer of complexity to the political landscape, showing how religious differences become political weapons.

## The Price of Honor

Shōgun consistently shows how the pursuit of honor can lead to both nobility and tragedy, exploring whether rigid adherence to code is strength or weakness.`,
        excerpt: "Un análisis de cómo Shōgun presenta una visión auténtica y compleja del Japón feudal, explorando honor, poder y choque cultural.",
        tags: ["shogun", "japon-feudal", "honor", "poder"],
        author: {
            name: "Prof. Hiroshi Tanaka",
            avatar: "https://via.placeholder.com/40"
        },
        status: "published",
        readTime: 14,
        views: 6123,
        likes: 298,
        createdAt: new Date("2024-11-15"),
        updatedAt: new Date("2024-11-15"),
        publishedAt: new Date("2024-11-15")
    },
    {
        title: "Reacher: Justicia Vigilante en la América Moderna",
        slug: "reacher-justicia-vigilante-america-moderna",
        content: `# Reacher: Justicia Vigilante en la América Moderna

## El Héroe Solitario Reimaginado

Reacher, basado en las novelas de Lee Child, presenta a Jack Reacher como un vigilante moderno que opera fuera del sistema legal pero dentro de un código moral estricto. Alan Ritchson encarna físicamente al personaje de una manera que honra la descripción de los libros.

## Jack Reacher: El Guerrero Filósofo

Reacher combines incredible physical capabilities with sharp analytical intelligence. He represents an idealized version of masculine competence: someone who can fight, think, and lead with equal skill.

## Margrave: Small Town Corruption

The first season's setting in the fictional town of Margrave, Georgia, allows the series to explore how corruption can take root in small communities and how outsiders can disrupt established power structures.

## Roscoe Conklin: Law Enforcement Integrity

Willa Fitzgerald's Roscoe represents law enforcement officers who maintain integrity despite corrupt systems. Her partnership with Reacher shows how official and unofficial justice can work together.

## Family Legacy and Military Service

Reacher's military background and family connections provide context for his skills and moral code. The series explores how military service shapes identity and values.

## Violence as Last Resort

Despite Reacher's combat skills, the series shows him using violence only when other options are exhausted. His approach to conflict resolution is strategic rather than impulsive.

## Economic Inequality

The series addresses economic inequality in small-town America, showing how economic desperation can drive people to corruption and how wealth concentrates power.

## The Outsider's Perspective

Reacher's status as a perpetual outsider allows him to see corruption and injustice that locals might ignore or accept. His mobility gives him both freedom and isolation.

## Brotherhood and Loyalty

The series explores different types of brotherhood: military bonds, family connections, and friendships forged in crisis. Loyalty becomes both a strength and a potential weakness.

## American Justice System

Reacher operates in the gaps where the official justice system fails, raising questions about vigilantism, due process, and when extralegal action might be justified.`,
        excerpt: "Un análisis de cómo Reacher presenta un vigilante moderno que opera dentro de un código moral estricto en la América contemporánea.",
        tags: ["reacher", "justicia", "vigilante", "america"],
        author: {
            name: "Det. Robert Kane",
            avatar: "https://via.placeholder.com/40"
        },
        status: "published",
        readTime: 10,
        views: 4456,
        likes: 213,
        createdAt: new Date("2024-11-12"),
        updatedAt: new Date("2024-11-12"),
        publishedAt: new Date("2024-11-12")
    }
];

async function agregarAnalisisAdicionales() {
    try {
        console.log('🔄 Conectando a MongoDB...');
        const client = new MongoClient(MONGODB_URI);
        await client.connect();
        console.log('✅ Conectado exitosamente.\n');

        const db = client.db('seriesAnalysisDB');
        const analysisCollection = db.collection('analysis');

        console.log('📝 Agregando análisis adicionales...\n');

        for (const analisis of analisisAdicionales) {
            // Verificar si ya existe un análisis con este slug
            const existingAnalysis = await analysisCollection.findOne({ slug: analisis.slug });

            if (existingAnalysis) {
                console.log(`⏭️  Análisis "${analisis.title}" ya existe. Omitiendo...`);
            } else {
                const result = await analysisCollection.insertOne(analisis);
                console.log(`✅ Agregado: "${analisis.title}"`);
                console.log(`   📝 Slug: ${analisis.slug}`);
                console.log(`   👀 Views: ${analisis.views}, ❤️ Likes: ${analisis.likes}`);
                console.log(`   📚 Tiempo de lectura: ${analisis.readTime} min\n`);
            }
        }

        // Verificar el total de análisis después de la inserción
        const totalAnalysis = await analysisCollection.countDocuments();
        console.log(`\n📊 RESUMEN:`);
        console.log(`📖 Total de análisis en la base de datos: ${totalAnalysis}`);
        console.log(`✨ Nuevos análisis agregados en esta sesión: ${analisisAdicionales.length}`);

        await client.close();
        console.log('\n🎉 ¡Proceso completado exitosamente!');

    } catch (error) {
        console.error('❌ Error:', error);
    }
}

agregarAnalisisAdicionales();
