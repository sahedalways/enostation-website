const Blog7 = '/assets/blog-7.png';
const Blog8 = '/assets/blog-8.png';
const Blog9 = '/assets/blog-9.png';

export const allBlogs = [
    {
        id: 1,
        title: "Exploring Laravel's Beauty: A Comprehensive Guide",
        image: 'https://media.licdn.com/dms/image/D5612AQFL8LOVruJtHg/article-cover_image-shrink_720_1280/0/1684605470270?e=2147483647&v=beta&t=f1YFizwlx0-tQ4cPxB_WW9cm2otHQojcV-D5LiGb3pM',
        desc: '<p style="margin-left:0px;">In the vast landscape of web development frameworks, Laravel stands out as one of the most powerful and elegant choices for building web applications. Its expressive syntax, robust features, and vibrant community make it a top contender for developers worldwide. However, for those transitioning from other frameworks or platforms, understanding the Laravel equivalents of familiar features and concepts can be immensely helpful. In this guide, we\'ll delve into the Laravel equivalent of various components, functionalities, and concepts, providing a comprehensive resource for developers making the switch or simply exploring new possibilities.</p><p style="margin-left:0px;">&nbsp;</p><ol><li><p style="margin-left:0px;"><strong>1. Routing</strong>: In Laravel, routing serves as the mechanism for directing incoming HTTP requests to the appropriate controllers and methods. Equivalent to this in other frameworks, such as Express.js or Django, Laravel\'s routing system offers flexibility and clarity. With its intuitive syntax, defining routes for different HTTP methods and URIs becomes straightforward. Developers accustomed to other frameworks will find Laravel\'s routing structure easy to grasp and powerful in implementation.</p><p style="margin-left:0px;">&nbsp;</p></li><li><p style="margin-left:0px;"><strong>2. Templating</strong>: Laravel\'s Blade templating engine provides a clean, expressive syntax for creating views. Comparable to templating engines like Jinja2 (in Python\'s Flask framework) or Twig (in Symfony), Blade offers features such as template inheritance, control structures, and reusable components. Developers familiar with other templating engines will appreciate Blade\'s simplicity and integration within the Laravel ecosystem.</p><p style="margin-left:0px;">&nbsp;</p></li><li><p style="margin-left:0px;"><strong>3.ORM (Object-Relational Mapping)</strong>: Eloquent, Laravel\'s built-in ORM, simplifies database interactions by mapping database tables to PHP objects. This ORM is equivalent to popular ORMs like Active-record (in Ruby on Rails) or Hibernate (in Java). Eloquent\'s fluent query builder and relationship management capabilities streamline database operations, making database interactions intuitive and efficient.</p><p style="margin-left:0px;">&nbsp;</p></li><li><p style="margin-left:0px;"><strong>4. Middleware</strong>: Middleware in Laravel provides a mechanism for filtering HTTP requests entering your application. Similar to middleware concepts in frameworks like Express.js or ASP.NET Core, Laravel middleware allows developers to perform tasks such as authentication, logging, or CORS handling before passing requests to route handlers. This modular approach to request processing enhances code reusability and maintainability.</p><p style="margin-left:0px;">&nbsp;</p></li><li><p style="margin-left:0px;"><strong>5. Authentication and Authorization</strong>: Laravel\'s authentication and authorization mechanisms simplify user management and access control. Comparable to authentication frameworks like Passport (in Express.js) or Django\'s built-in authentication system, Laravel\'s authentication features include ready-to-use controllers, middleware, and encryption utilities. With Laravel\'s native support for OAuth, JWT, and session-based authentication, developers can implement secure authentication workflows with ease.</p><p style="margin-left:0px;">&nbsp;</p></li></ol><p style="margin-left:0px;"><strong>Conclusion</strong>: Navigating the transition to Laravel or exploring its capabilities as an alternative framework can be a rewarding experience for developers. By understanding the Laravel equivalents of familiar features and concepts, developers can leverage the framework\'s strengths while building robust and scalable web applications. Whether you\'re migrating from another framework or embarking on a new project, Laravel offers a comprehensive toolkit and a vibrant community to support your development journey.</p>',
        tag: 'FRAMEWORK',
        readTime: '8 min read',
        author: 'CEO : Sk Sahed Ahmed',
        date: '28 April, 2024',
    },

    {
        id: 2,
        title: 'জাভাস্ক্রিপ্টে হোইস্টিং: কী, কেন, এবং কিভাবে?',
        image: 'https://i.ytimg.com/vi/pJ_oKVFHMK0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA_RV6WGCaHhporAbCMumeq-xe-BA',
        desc: '<p><strong>Javascript Hoisting</strong> খুবই মজার একটা বিষয়। যদি আপনি শিখে যান তাহলে Javascript নিয়ে কাজ করতে মজা পাবেন। আপনার যদি Javascript Execution Context নিয়ে বিশদ ধারনা থাকে তাহলে hoisting-এর ধারণাটি সহজেই ক্লিয়ার করতে পারবেন।</p><p>&nbsp;</p><p>Hoisting মানে উপরে তোলা। কিন্তু আসলেই কি জাভাস্ক্রিপ্ট উপরে তোলে কোন কিছুকে? চলুন একটু গভীরে ডুব দেয়া যাক।</p><p>&nbsp;</p><p><strong>console.log("My name is", name);</strong><br><strong>var name;</strong><br><strong>name = "Sahed";</strong><br><strong>console.log("My name is", name);</strong></p><p>&nbsp;</p><p>উপরে কোডটির দু\'টো console.log-এর আউটপুট কি আসবে? প্রথমে একটি variable-কে &nbsp;console.log করা হয়েছে। &nbsp;পরের লাইনে উপরে console.log করা &nbsp;Variable-কে ডিক্লেয়ার করা হয়েছে তবে কোন ভ্যালু ইঞ্জেক্ট করা হয়নি। তারপরের লাইনে ভ্যারিএবলটিতে ভ্যালু ইঞ্জেক্ট করা হয়েছে। শেষ লাইনে ভেরিএবলটিকে আবার console.log করা হয়েছে।</p><p>hoisting বুঝার আগে আপনাকে এটা বুঝতে হবে জাভাস্ক্রিপ্ট কিভাবে কাজ করে।</p><p>জাভাস্ক্রিপ্ট কিভাবে কাজ করে : জাভাস্ক্রিপ্ট মূলত দু\'টি Phase-এ কোড execute করে। &nbsp;প্রথমেই জাভাস্ক্রিপ্ট creation phase-এর কাজ করে তারপর execution phase-এর কাজ করে। আর তারপর আমরা বিভিন্ন আউটপুট দেখতে পাই।</p><p><br><strong>Creation Phase :</strong> ফাকা ভেরিএবলটিকে আমরা একটা ফাকা কৌটা ভাবতে পারি। code run করার সাথে সাথেই জাভাস্ক্রিপ্টের interpreter(কোড কম্পাইলার) কৌটাটিকে নিজের কাছে যত্ন করে রেখে দেয়। কারন সে ভাবে আমার বস যেহেতু কৌটাটিকে রেখেছে সেহেতু সে অবশ্যই এটা নিয়ে কাজ করবে। এই কাজটি করে creation phase-এ।</p><p>&nbsp;</p><p><strong>Execution Phase :</strong> এবার এই phase-এ জাভাস্ক্রিপ্ট কোড execute করতে শুরু করে। কোন ভেরিবলের মধ্যে ভ্যালু ইঞ্জেক্ট করা হয়, ভেরিএবল অথবা কোন ফাংশন যদি কল করা হয় সেগুলো করে ফেলে। আর রেজাল্ট দেখায় তার কাছে যত্নে রাখা ভেরিএবল অথবা ফাংশন থেকে। যেগুলো সে creation phase-এ করে রেখেছিল।</p><p>&nbsp;</p><p>এবার উপরের কোডটিতে কিভাবে hoisting কাজ করছে বুঝা যাক। প্রথমত একটি ভেরিএবল console.log করা হয়েছে যেটা creation phase এ জাভাস্ক্রিপ্ট interpreter(কম্পাইলার) execute করবে না কারন এটা creation phase. তারপরের লাইনে কপ্লাইলার ভেরিএবল ডিক্লেয়ার করা দেখবে আর সেটা তার global execution memory-তে undefined ভ্যালু দিয়ে store করে ফেলবে। তারপরের লাইনে সে কিছুই করবে না কারন এটা execution phase এর কাজ। শেষ লাইনটাও ছেড়ে দিবে।</p><p>&nbsp;</p><p>এবার execution phase-এ এসে কপ্লাইলার প্রথম লাইনের console.log-কে execute করবে। আর name ভেরিএবলের আউপুট আসবে undefined. কারন কম্পাইলার creation phase এ ভেরিএবলটিকে undefined হিসেবে store করেছিল। তারপরের লাইনের কাজ করবে না(creation phase-এ create করেছিল)। তারপরের লাইনে store-কৃত ভেরিএবলের ভ্যালু undefined থেকে Sahed হিসেবে update করে দিবে এবং শেষ লাইনে সুন্দরমত output আসবে My name is Sahed.</p><p>&nbsp;</p><p>এভাবেই আসলে hoisting কাজ করে। আপনারা যদি এটা নিয়ে কিছু example দেখেন এবং বুঝাতে চেষ্টা করেন তাহলে অবশ্যই আপনারা ধারণাটি ক্লিয়ার করতে পারবেন। আশা করি একটু হলেও hoisting সম্পর্কে বুঝাতে সক্ষম হয়েছি। ধন্যবাদ পুরোটা পড়ার জন্য। happy coding.</p>',
        tag: 'JAVASCRIPT',
        readTime: '7 min read',
        author: 'CEO : Sk Sahed Ahmed',
        date: '29 April, 2024',
    },

    {
        id: 3,
        title: 'লারাভেল মডেল-ভিউ-কন্ট্রোলার (MVC) প্যাটার্নে সফটওয়্যার ডেভেলপমেন্ট',
        image: 'https://qalbit.com/blog/wp-content/uploads/2023/03/MVC-LARAVEL-BLOG.webp',
        desc: '<p style="margin-left:0px;">ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্টে সাফল্য অর্জনের পথে, মডেল-ভিউ-কন্ট্রোলার (MVC) প্যাটার্ন একটি অত্যন্ত গুরুত্বপূর্ণ অংশ। এই প্যাটার্ন সহজেই কোড প্রসেসিং এবং কোডের অনুবাদ দুর্বলতা কমায়, সহজে পরিবর্তন করা যায় এবং অ্যাপ্লিকেশন এর কোডগুলি অর্থপূর্ণ ভাবে পুনর্বিচার করা যায়। এই লেখায়, আমরা লারাভেলে এই MVC প্যাটার্ন কীভাবে কাজ করে তা নিয়ে আলোচনা করব।</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;"><strong>মডেল (Model):</strong> মডেল হল ডেটা রাখার জায়গা। লারাভেলে, এটি ডেটাবেস টেবিলের সাথে সম্পর্কিত ডেটা প্রতিনিধিত্ব করে। এটি ডেটাবেস থেকে ডেটা প্রাপ্ত করার জন্য ব্যবহৃত হয়, তা প্রস্তুত করার জন্য এবং ডেটা রেকর্ড তৈরি করার জন্য ব্যবহৃত হয়। লারাভেল একটি Eloquent ORM প্রদান করে, যা ডেটাবেস মডেলিং এবং ডেটা এক্সেস বিষয়ক জনপ্রিয় সহায়ক হিসেবে ব্যবহার করা হয়।</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;"><strong>ভিউ (View):</strong> ভিউ হল ডেটার প্রদর্শন করার জায়গা। লারাভেলে, ভিউগুলি মূলত ব্লেড টেমপ্লেটিং ইঞ্জিনের মাধ্যমে তৈরি করা হয়। ব্লেড সহজেই ভিউগুলির সাথে ইন্টিগ্রেট হয় এবং প্রায়ই রিইউজেবল কোড কোড প্রস্তুত করে।</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;"><strong>কন্ট্রোলার (Controller):</strong> কন্ট্রোলার হল একটি মধ্যম প্রতিষ্ঠান, যা মডেল থেকে ডেটা লোড করে এবং ভিউগুলি তৈরি করে। এটি যাচাই করে নিতে পারে ব্যবহারকারীর ইনপুট এবং সে সহজেই মডেলে ডেটা প্রেরণ করতে পারে।</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">তাই, আপনি দেখেন, লারাভেলে MVC প্যাটার্ন প্রোগ্রামিং কাজের কৌশলের সুস্পষ্ট সংমিশ্রণ প্রদান করে। এটি একটি মডেলমূলক, সংরক্ষণশীল এবং পরিচালনামূলক পদ্ধতিতে ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট সুবিধাজনক করে। তাহলে, লারাভেলে আপনার প্রজেক্ট শুরু করুন এবং MVC প্যাটার্নে আপনার অ্যাপ্লিকেশন তৈরি করুন!</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">ধন্যবাদ পড়ার জন্য।</p>',
        tag: 'FRAMEWORK',
        readTime: '6 min read',
        author: 'CEO : Sk Sahed Ahmed',
        date: '07 May, 2024',
    },

    {
        id: 4,
        title: 'পিএইচপি অবজেক্ট অরিয়েন্টেড প্রোগ্রামিং (OOP)',
        image: 'https://cdn-images-1.medium.com/max/891/1*oAIfjxo_whV0EIdVKdUt2w.png',
        desc: '<p style="margin-left:0px;"><br>PHP-এর অবজেক্ট অরিয়েন্টেড প্রোগ্রামিং (ওওপি) একটি গুরুত্বপূর্ণ কনসেপ্ট, যা প্রোগ্রামারদের কোডকে আরও organize এবং debug করতে, কোড রিউজেবিলিটি এবং মেন্টেনেবিলিটি বাড়াতে এবং প্রোগ্রামারদের কোড লেখার কাজকে সহজ করে।</p>\n<p style="margin-left:0px;">&nbsp;</p>\n<p style="margin-left:0px;"><strong>মূল কনসেপ্টগুলো:</strong></p>\n<ol>\n    <li>\n        <p style="margin-left:0px;"><strong>অবজেক্ট (Object):</strong> অবজেক্ট হল ডেটা এবং ফাংশনালিটির সংমিশ্রণ, যা একটি অপারেশনের সাথে সম্পর্কিত।</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n    <li>\n        <p style="margin-left:0px;"><strong>ক্লাস (Class):</strong> এটি একটি টেমপ্লেট, যা অবজেক্ট বানাতে ব্যবহৃত হয়।</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n    <li>\n        <p style="margin-left:0px;"><strong>ইনহেরিটেন্স (Inheritance):</strong> এটি একটি ক্লাসের প্রপার্টি এবং মেথডগুলোকে অন্য ক্লাসে পাঠাতে সাহায্য করে।</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n    <li>\n        <p style="margin-left:0px;"><strong>পলিমর্ফিজম (Polymorphism):</strong> এটি একই নামের মেথড বা ফাংশন ব্যবহার করে ভিন্ন আকারে কাজ করতে সাহায্য করে।</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n    <li>\n        <p style="margin-left:0px;"><strong>ইনক্যাপসুলেশন (Encapsulation):</strong> এটির সাহায্যে কোন ক্লাসের প্রপার্টি এবং মেথডগুলোকে অন্য ক্লাসে অ্যাক্সেস কন্ট্রোল বা <span style="background-color:rgb(33,33,33);color:rgb(236,236,236);font-family:Söhne, ui-sans-serif, system-ui, -apple-system, &quot;Segoe UI&quot;, Roboto, Ubuntu, Cantarell, &quot;Noto Sans&quot;, sans-serif, &quot;Helvetica Neue&quot;, Arial, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;;font-size:16px;">প্রাইভেট</span> করা যায়।</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n</ol>\n<p style="margin-left:0px;"><strong>এই কনসেপ্টগুলো অ্যাপ্লিকেশনগুলোর কোডিংকে সহজতর করে এবং মেন্টেনেবিলিটি বাড়াতে সাহায্য করে।</strong></p>\n<p style="margin-left:0px;">&nbsp;</p>\n<p style="margin-left:0px;"><strong>অবজেক্ট অরিয়েন্টেড প্রোগ্রামিং এর সুবিধাগুলি:</strong></p>\n<ol>\n    <li>\n        <p style="margin-left:0px;"><strong>সংগঠিত কোড:</strong> ওওপি ব্যবহার করে কোডগুলো organize বা সংগঠিত করা যায়।</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n    <li>\n        <p style="margin-left:0px;"><strong>কোড রিউজেবিলিটি:</strong> &nbsp;একটি ক্লাস একাধিক জায়গায় ব্যবহার করা যায়, যা কোড রিউজেবিলিটি বাড়াতে সাহায্য করে এবং bug fix করতে সহজ হয়।</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n    <li>\n        <p style="margin-left:0px;"><strong>কোড মেন্টেনেবিলিটি:</strong> ওওপি মেথড এবং প্রপার্টির মাধ্যমে কোডের মেন্টেনেবিলিটি বাড়ায়, কারন সহজে মেথড এবং প্রপার্টি পরিবর্তন করা যায়।</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n    <li>\n        <p style="margin-left:0px;"><strong>কোড পরীক্ষা:</strong> ওওপি ব্যবহার করে কোড টেস্টিং সহজ এবং কার্যকর হয়, যা এর গুরুত্বপূর্ণ অংশ।</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n    <li>\n        <p style="margin-left:0px;"><strong>সহজে বোঝা:</strong> অবজেক্ট অরিয়েন্টেড প্রোগ্রামিং মডেল বোঝা সহজ,নতুন প্রোগ্রামাররা সহজে কোড করতে পারে।</p>\n    </li>\n</ol> <p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">ধন্যবাদ পড়ার জন্য।</p>',
        tag: 'PHP',
        readTime: '7 min read',
        author: 'CEO : Sk Sahed Ahmed',
        date: '13 May, 2024',
    },

    {
        id: 5,
        title: 'Understanding Laravel Queues: A Guide to Asynchronous Task Processing',
        image: 'https://inspector.dev/wp-content/uploads/2020/09/laravel-queues-how-it-works.png',
        desc: '<p style="margin-left:0px;"><br>Laravel Queues provide a powerful tool to manage and process time-consuming tasks asynchronously. By using queues, you can offload tasks like sending emails, processing file uploads, or generating reports, ensuring that your web application remains fast and responsive.</p>\n<p style="margin-left:0px;">&nbsp;</p>\n<p style="margin-left:0px;"><strong>Key Concepts:</strong></p>\n<ol>\n    <li>\n        <p style="margin-left:0px;"><strong>Queue:</strong> A queue is a storage system where jobs are placed to be processed later by a queue worker. Jobs can be any task, such as sending an email, processing data, or generating reports.</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n    <li>\n        <p style="margin-left:0px;"><strong>Job:</strong> A job is a class in Laravel that represents a task that needs to be processed in the queue. It contains the logic for the task and can be queued for later execution.</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n    <li>\n        <p style="margin-left:0px;"><strong>Queue Worker:</strong> A queue worker is a background process that listens to the queue for new jobs and processes them when they arrive. Laravel provides a built-in command to start workers and keep them running.</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n    <li>\n        <p style="margin-left:0px;"><strong>Queue Driver:</strong> The queue driver determines where your jobs are stored. Laravel supports various drivers like `database`, `Redis`, `Beanstalkd`, `Amazon SQS`, and more.</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n</ol>\n<p style="margin-left:0px;"><strong>How Laravel Queues Work:</strong></p>\n<ol>\n    <li>\n        <p style="margin-left:0px;"><strong>Creating a Job:</strong> First, you create a job class using the artisan command `php artisan make:job JobName`. This class will contain the logic for the task you want to perform.</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n    <li>\n        <p style="margin-left:0px;"><strong>Dispatching a Job:</strong> Once a job is created, you can dispatch it to the queue using the `dispatch()` method. For example, you can dispatch an email job like this: `EmailJob::dispatch($user);`</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n    <li>\n        <p style="margin-left:0px;"><strong>Processing a Job:</strong> A queue worker listens for jobs in the queue and processes them one by one. You can run a queue worker using the command `php artisan queue:work`.</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n    <li>\n        <p style="margin-left:0px;"><strong>Handling Failed Jobs:</strong> Laravel also provides a built-in mechanism to handle failed jobs. If a job fails after multiple attempts, you can configure Laravel to store failed jobs in a separate database table.</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n</ol>\n<p style="margin-left:0px;"><strong>Benefits of Using Laravel Queues:</strong></p>\n<ol>\n    <li>\n        <p style="margin-left:0px;"><strong>Improved Application Performance:</strong> By offloading tasks to the queue, your application can continue to respond to user requests without delay, ensuring faster response times.</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n    <li>\n        <p style="margin-left:0px;"><strong>Scalability:</strong> Laravel\'s queue system can scale horizontally, which means you can run multiple queue workers on different servers to handle a large volume of jobs.</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n    <li>\n        <p style="margin-left:0px;"><strong>Asynchronous Task Execution:</strong> Queues enable tasks to run in the background, allowing you to perform other operations without blocking the user interface.</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n    <li>\n        <p style="margin-left:0px;"><strong>Retries and Failures:</strong> Laravel automatically retries jobs that fail a few times and handles failed jobs with detailed logging for debugging purposes.</p>\n        <p style="margin-left:0px;">&nbsp;</p>\n    </li>\n</ol>\n<p style="margin-left:0px;">&nbsp;</p>\n<p style="margin-left:0px;"><strong>Conclusion:</strong> Laravel Queues make it easy to process time-consuming tasks asynchronously, enhancing application performance and improving user experience. Whether it\'s sending emails, processing large datasets, or generating reports, Laravel provides a simple, efficient way to manage tasks in the background, making your application more scalable and responsive.</p>\n<p style="margin-left:0px;">&nbsp;</p>\n<p style="margin-left:0px;">Thank you for reading!</p>',
        tag: 'FRAMEWORK',
        readTime: '9 min read',
        author: 'CEO : Sk Sahed Ahmed',
        date: '18 March, 2025',
    },
    {
        id: 6,
        title: 'PHP 8.5: Features That Will Make Your Life Easier',
        image: 'https://miro.medium.com/0*xSdL-GyjBtHXgBSl.png',
        desc: `

<p>PHP 8.5 is almost here, and developers have a lot to be excited about! While not every feature is groundbreaking, many small, thoughtful improvements combine to make coding smoother and more enjoyable. Let’s explore what makes PHP 8.5 a truly <em>developer-friendly</em> release.</p>
<hr>

<h2>🚀 Pipe Operator: Eliminate Temporary Variables</h2>
<p>Previously, you might write:</p>
<div style="margin-bottom:20px;">
<pre><code class="language-php">$email = "  TEST@EXAMPLE.COM  ";
$email = trim($email);
$email = strtolower($email);
sendEmail($email);
</code></pre>
</div>

<p>With the new <strong>pipe operator</strong>, your code becomes cleaner and more readable:</p>
<div style="margin-bottom:20px;">
<pre><code class="language-php">"  TEST@EXAMPLE.COM  "
    |> trim()
    |> strtolower()
    |> sendEmail();
</code></pre>
</div>

<hr>
<h2>🛑 #[NoDiscard] Attribute: Never Ignore Return Values</h2>
<div style="margin-bottom:20px;">
<pre><code class="language-php">#[NoDiscard]
function getName(): string {
    return "Nuno";
}

getName(); // PHP 8.5 warns: You should use the return value!
</code></pre>
</div>

<hr>
<h2>🧠 Closures in Constant Expressions</h2>
<div style="margin-bottom:20px;">
<pre><code class="language-php">class Example {
    public const VALIDATOR = static function($value) {
        return !empty($value);
    };
}
</code></pre>
</div>

<hr>
<h2>🔧 Array Helpers: <code>array_first()</code> & <code>array_last()</code></h2>
<div style="margin-bottom:20px;">
<pre><code class="language-php">$users = ["Adrian", "Maria", "Pedro"];
$first = array_first($users); // Adrian
$last  = array_last($users);  // Pedro
</code></pre>
</div>

<hr>
<h2>🏷️ Attributes on Global Constants</h2>
<div style="margin-bottom:20px;">
<pre><code class="language-php">#[Deprecated("Use NEW_CONSTANT instead")]
const OLD_CONSTANT = 42;
</code></pre>
</div>

<hr>
<h2>🐛 Get Exception Handler</h2>
<div style="margin-bottom:20px;">
<pre><code class="language-php">set_exception_handler(fn($e) => echo "Caught: " . $e->getMessage());
$handler = get_exception_handler();
var_dump($handler);
</code></pre>
</div>

<hr>
<h2>🌍 IntlListFormatter</h2>
<div style="margin-bottom:20px;">
<pre><code class="language-php">$formatter = new \\Intl\\IntlListFormatter('en', \\Intl\\IntlListFormatter::TYPE_AND);
echo $formatter->format(['Lisbon', 'Porto', 'Coimbra']);
// Output: "Lisbon, Porto, and Coimbra"
</code></pre>
</div>

<hr>
<h2>🖥️ CLI & Internal Improvements</h2>

<h3>1️⃣ php.ini Diff</h3>
<div style="margin-bottom:20px;">
<pre><code class="language-bash">php -i --diff
</code></pre>
</div>

<h3>2️⃣ PHP Build Date Constant</h3>
<div style="margin-bottom:20px;">
<pre><code class="language-php">echo PHP_BUILD_DATE; // e.g. 2025-09-17 14:32:00
</code></pre>
</div>

<h3>3️⃣ Final Property Promotion</h3>
<div style="margin-bottom:20px;">
<pre><code class="language-php">class User {
    public function __construct(
        final public string $username,
        public string $email
    ) {}
}
</code></pre>
</div>
<h3>4️⃣ Miscellaneous Tweaks</h3>
<ul style="margin-bottom:30px;">
    <li>Cleaner CLI warnings for deprecated features</li>
    <li>Improved default error reporting</li>
    <li>Faster memory usage for certain scripts</li>
</ul>

<hr style="margin-bottom:30px;">

<h2>🎯 Why PHP 8.5 Matters</h2>
<ul style="margin-bottom:30px;">
    <li>Reduces boilerplate code</li>
    <li>Makes code safer</li>
    <li>Improves debugging experience</li>
    <li>Better configuration visibility</li>
</ul>

<hr style="margin-bottom:30px;">

<h2>✅ Final Thoughts</h2>
<p style="margin-bottom:30px;">
PHP 8.5 enhances developer ergonomics. It’s not about just big features; it’s about making everyday coding smoother and more enjoyable.
</p>

<p><strong>Key Takeaways:</strong></p>
<ul>
    <li><strong>Pipe Operator</strong> → Clean, readable method chains</li>
    <li><strong>NoDiscard</strong> → Safer handling of return values</li>
    <li><strong>Closures in Constants</strong> → More flexible logic</li>
    <li><strong>array_first / array_last</strong> → Simpler array handling</li>
    <li><strong>Attributes on Constants</strong> → Metadata support</li>
    <li><strong>Improved CLI</strong> → Faster debugging & setup</li>
</ul>

<p>Try the PHP 8.5 beta—these features can instantly become part of your daily workflow.</p>
  `,
        tag: 'PHP',
        readTime: '6 min read',
        author: 'CEO : Sk Sahed Ahmed',
        date: '19 September, 2025',
    },

    {
        id: 7,
        title: 'AI কে Junior Coder হিসেবে ব্যবহার করুন: Engineering Way of Thinking',
        image: Blog7,
        desc: `
        <p><strong>AI কে জুনিয়র কোডার হিসেবে ব্যবহার করতে হবে, সে আপনার ছোট ভাই:</strong> একজন ইঞ্জিনিয়ারের মতো চিন্তা ভাবনা করার গাইড নিয়ে আলোচনা করব, নড়েচড়ে বসেন -</p>

        <p>বর্তমান সময়ে অনেক ডেভেলপার AI ব্যবহার করছে।<br>
        কিন্তু বাস্তব কিছু বিষয় হলো -</p>

        <p>AI ব্যবহার করা আর AI দিয়ে ইঞ্জিনিয়ারিং করা এক জিনিস না।<br>
        যদি আপনি AI কে “সব জানে” ভেবে পুরো একটা ফিচার বানাতে দেন,<br>
        তাহলে আপনি ইঞ্জিনিয়ার হতে পারবেন না।<br>
        আপনি স্রেফ একজন prompt writer। নয়ত নিজেকে copy - paster-ও বলতে পারেন।</p>

        <p><strong>❌ so, মহা ভুল হলো:</strong> “পুরো ফিচার বানিয়ে দাও” - এসব বলা যাবে না AI-কে।
        AI তোতা পাখির মত। সে কোড বোঝে না। সে বোঝে না javascript, php, python or anything.
        তাকে প্রশ্নের সাথে সংশ্লিষ্ট উত্তর গুলো বারবার শেখানো হয়েছে আর সে একটা শব্দের পর আরেকটা শব্দ predict করে করে লিখতে থাকে।
        তাই তার দেয়া কোডবেইজ সব সময় যে ভাল পারফর্ম করবে, সিকিউর হবে—এই অন্ধবিশ্বাস করবেন তো আপনার ব্যবসায়ে লাল বাতি জ্বলবে।</p>

        <p>বেশিরভাগ মানুষ AI কে বলে -<br>
        “make for me a complete AI similar to you with js"</p>

        <p><strong>রেজাল্ট কী হয়?</strong></p>
        <ul>
            <li>বিশাল code dump</li>
            <li>business logic গুলা clear থাকবে না</li>
            <li>edge case miss</li>
            <li>test নেই</li>
            <li>maintain করা কঠিন</li>
        </ul>

        <p>এইটা engineering না, এইটা দুই দিনের বৈরাগী হওয়ার লাইন।</p>

        <p><strong>✅ সঠিক নিয়ম: Engineering way of thinking</strong><br>
        একজন ইঞ্জিনিয়ার প্রথমে চিন্তা করে -</p>

        <ul>
            <li>Problem টা আসলে কী?</li>
            <li>কোন কোন module লাগবে?</li>
            <li>কোনটা core logic, কোনটা boilerplate?</li>
            <li>কোথায় failure হতে পারে?</li>
            <li>test কিভাবে হবে?</li>
        </ul>

        <p>👉 এই চিন্তাগুলো আপনার করতে হবে। যদি নিজেকে ইঞ্জিনিয়ার হিসেবে দাবী করেন এবং সফটওয়্যার ফিল্ডে টিকে থাকতে চান।</p>

        <p><strong>Code লেখার কাজ AI এর। চিন্তা করার কাজ আপনার।</strong>
        AI চিন্তা করতে পারে না। আপনিও যদি এমন হোন তাহলে আপনি খুব দ্রুত clear to ফকফকা হয়ে যাবেন।</p>
    `,
        tag: 'AI & GROWTH',
        readTime: '5 min read',
        author: 'CEO : Sk Sahed Ahmed',
        date: '4 February, 2026',
    },

    {
        id: 8,
        title: 'একজন মুমিন Software Engineer কিভাবে ইসলাম এবং তার কাজকে কম্বিনেশন করবে',
        image: Blog8,
        desc: `
        <p>বর্তমান সফটওয়্যার ফিল্ড খুবই দ্রুত এগিয়ে যাচ্ছে। অনেক সময় মূল্যবোধকে পেছনে ফেলে এগিয়ে যেতে বাধ্য করে। কিন্তু একজন মুমিন Software Engineer জানে -
        👉 পেশা আর ঈমান আলাদা কিছু নয়, বরং পেশার মধ্যেই ঈমানের পরীক্ষা।</p>

        <h3>১. নিয়ত ঠিক করা (Intention is Everything)</h3>
        <p>কোড লেখার আগে নিয়ত ঠিক করাটা জরুরি -</p>
        <blockquote>“আমি এই কাজটা করছি হালাল উপায়ে রিজিক অর্জনের জন্য এবং মানুষের উপকারের জন্য।”</blockquote>
        <p>একটা সাধারণ CRUD অ্যাপও ইবাদত হিসেবে গণ্য হতে পারে, যদি নিয়ত থাকে আল্লাহর সন্তুষ্টির।</p>

        <h3>২. কাজের মধ্যে আমানতদারি (Professional Integrity)</h3>
        <p>একজন মুমিন ডেভেলপার -</p>
        <ul>
            <li>Bug জেনেও, সেটা গোপন রেখে ডেলিভারি দেয় না</li>
            <li>Client কে অপ্রয়োজনীয় চার্জ করে না</li>
            <li>Code plagiarism করে না</li>
            <li>সময় ও কমিটমেন্ট রক্ষা করে</li>
        </ul>
        <p>কারন কুরআন আমাদেরকে শেখায় - “নিশ্চয়ই আল্লাহ আমানতদারদের ভালোবাসেন।”</p>

        <h3>৩. সময় ব্যবস্থাপনা</h3>
        <ul>
            <li>মিটিং, ডেপ্লয়মেন্ট, স্ট্যান্ডআপ; সবকিছুর মাঝেও সালাতের জায়গা থাকবে।</li>
            <li>Alarm সেট করা</li>
            <li>Calendar এ prayer break রাখা</li>
            <li>Remote কাজ হলে আরও সচেতন হওয়া</li>
        </ul>
        <p>👉 Deadline !== সালাত</p>

        <h3>৪. হালাল ইনকাম ও প্রজেক্ট বাছাই</h3>
        <p>সব প্রজেক্ট pick করা যাবে না। একজন মুমিন এড়িয়ে চলবে -</p>
        <ul>
            <li>সুদভিত্তিক জুয়া/বেটিং অ্যাপ</li>
            <li>অশ্লীল কনটেন্ট</li>
            <li>প্রতারণামূলক সিস্টেম</li>
        </ul>
        <p>দিনশেষে রিজিক কম হলেও হালাল রিজিকেই বরকত থাকবে। মনে থাকবে অগাধ প্রশান্তি।</p>

        <h3>৫. Tech কে খিদমাহ হিসেবে দেখা</h3>
        <ul>
            <li>Software শুধু টাকা কামানোর মাধ্যম না</li>
            <li>Education platform</li>
            <li>Healthcare system</li>
            <li>Charity, Zakat management</li>
            <li>Social good apps</li>
        </ul>
        <p>👉 একজন মুমিন ডেভেলপার ভাবে: “আমার স্কিল দিয়ে আমি কাকে উপকার করতে পারি?”</p>

        <h3>৬. অহংকার নয়, তাওয়াজু</h3>
        <p>Knowledge বাড়লে অহংকার আসতে পারে। কিন্তু একজন মুমিন জানে -</p>
        <blockquote>“আমি যা জানি, তা আল্লাহর দেওয়া।”</blockquote>
        <p>Junior কে সম্মান, team কে সাহায্য, credit ভাগ করে নেওয়া; সবই ঈমানের অংশ।</p>

        <h3>৭. দুআ, তাওয়াক্কুল ও সবর</h3>
        <ul>
            <li>Production crash হলে সবর</li>
            <li>Client হারালে তাওয়াক্কুল</li>
            <li>Success এ শুকর</li>
        </ul>
        <p>কোডে যেমন ডিবাগ করতে হয়, তেমনি আল্লাহ সুবহানাহু তা'আলার সন্তুষ্টির জন্যও আমাদের ঈমান - আমলের ডিবাগ করতে হবে।</p>

        <h3>🔚 শেষ কথা</h3>
        <p>একজন Software Engineer মুমিন হলে - সে শুধু ভালো developer না, সে নৈতিক, বিশ্বাসযোগ্য ও আল্লাহভীরু মানুষ।</p>
        <p>ইসলাম আপনাকে কাজ থেকে দূরে নিয়ে যাবে না, বরং কাজের মাধ্যমেই হয়ে যেতে পারেন আল্লাহ সুবহানাহু তা'আলার প্রিয় একজন।</p>
    `,
        tag: 'CAREER & GROWTH',
        readTime: '7 min read',
        author: 'CEO : Sk Sahed Ahmed',
        date: '5 February, 2026',
    },
    {
        id: 9,
        title: 'Code Writing is Not Enough -- Reading Codebase is What Makes You a Real Developer',
        image: Blog9,
        desc: `<div>

<p style="margin-left:0px;">
আজকের software development world এ শুধু code লিখতে পারা enough না। এখন AI tools দিয়ে খুব সহজেই আমরা ready-made code generate করতে পারি, frameworks ব্যবহার করতে পারি, এমনকি পুরো project structure পর্যন্ত পেয়ে যাই।
</p>

<p style="margin-left:0px;">
But এখানে একটা বড় problem আছে - আমরা অনেকেই সেই code read করি না, understand করি না।
</p>

<p style="margin-left:0px;">
You can build features, fix bugs, even complete full projects - কিন্তু যদি তুমি নিজের ব্যবহার করা codebase না পড়ো এবং না বোঝো, তাহলে তোমার growth আস্তে আস্তে নিঃশেষ হয়ে যাবে।
</p>

<p style="margin-left:0px;">
A real developer is not just a coder - a developer is a reader + thinker + builder.
</p>

<br/>

<p style="margin-left:0px;"><strong>Why Just Writing Code is Not Enough</strong></p>

<p style="margin-left:0px;">
অনেক developer প্রতিদিন feature বানাচ্ছে, bug fix করছে, project ship করছে - কিন্তু তারা actually বুঝতেই পারছে না তারা কতটা improve করছে।
</p>

<p style="margin-left:0px;"><strong>Problem হচ্ছে:</strong></p>

<ul>
    <li><p style="margin-left:0px;">You write code but don’t deeply understand the full codebase</p></li>
    <li><p style="margin-left:0px;">You copy or generate code from AI but never revisit it</p></li>
    <li><p style="margin-left:0px;">You don’t try to understand “why this code is written this way”</p></li>
    <li><p style="margin-left:0px;">You never read your own old or AI-generated code again</p></li>
</ul>

<p style="margin-left:0px;"><strong>Result:</strong></p>

<ul>
    <li><p style="margin-left:0px;">Same mistakes repeat হয়</p></li>
    <li><p style="margin-left:0px;">Debugging time increase হয়</p></li>
    <li><p style="margin-left:0px;">Real understanding develop হয় না</p></li>
    <li><p style="margin-left:0px;">Growth becomes slow and surface-level</p></li>
</ul>

<br/>

<p style="margin-left:0px;"><strong>The Power of Reading Codebase</strong></p>

<p style="margin-left:0px;">
When you start focusing on reading and understanding codebase, everything changes:
</p>

<ul>
    <li><p style="margin-left:0px;">You start understanding architecture, not just syntax</p></li>
    <li><p style="margin-left:0px;">You learn how real-world systems are structured</p></li>
    <li><p style="margin-left:0px;">You become better at debugging and optimization</p></li>
    <li><p style="margin-left:0px;">You stop depending blindly on AI</p></li>
    <li><p style="margin-left:0px;">You start thinking like a system designer</p></li>
</ul>

<p style="margin-left:0px;">
Reading code is like reading someone else’s thinking process.
</p>

<br/>

<p style="margin-left:0px;"><strong>AI Code + Reading = Real Growth Loop</strong></p>

<p style="margin-left:0px;">
Think like this:
</p>

<p style="margin-left:0px;">
AI generated code → Reading → Understanding → Modification → Mastery
</p>

<p style="margin-left:0px;">
এই loop follow করলে তুমি শুধু coder না, বরং strong problem solver হয়ে উঠবে।
</p>

<p style="margin-left:0px;">
Because AI তোমাকে answer দিচ্ছে, but reading is what makes that answer meaningful.
</p>

<br/>

<p style="margin-left:0px;"><strong>How to Practice Code Reading</strong></p>

<p style="margin-left:0px;">
তুমি চাইলে এই simple habits follow করতে পারো:
</p>

<ul>
    <li><p style="margin-left:0px;">Always read full file before using it</p></li>
    <li><p style="margin-left:0px;">Ask yourself: “Why this structure is used?”</p></li>
    <li><p style="margin-left:0px;">Break large code into small parts and understand step by step</p></li>
    <li><p style="margin-left:0px;">Revisit your old projects and refactor mentally</p></li>
    <li><p style="margin-left:0px;">Try to explain code to yourself or someone else</p></li>
</ul>

<br/>

<p style="margin-left:0px;"><strong>Final Thoughts</strong></p>

<p style="margin-left:0px;">
Don’t just be a “code writer”.
</p>

<p style="margin-left:0px;">
Be a:
</p>

<p style="margin-left:0px;">Reader</p>
<p style="margin-left:0px;">Thinker</p>
<p style="margin-left:0px;">Builder</p>
<p style="margin-left:0px;">Problem solver</p>

<p style="margin-left:0px;">
কারণ ভবিষ্যতে তারাই succeed করবে যারা শুধু code লিখে না, বরং code understand করে, question করে, এবং improve করে।
</p>

<p style="margin-left:0px;">
Code is temporary - understanding is permanent.
</p>

</div>`,
        tag: 'DEVELOPER MINDSET',
        readTime: '6 min read',
        author: 'CEO : Sk Sahed Ahmed',
        date: '06 June, 2026',
    },
];
