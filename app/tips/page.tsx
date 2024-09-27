import dust from "@public/tips/dust.jpg";
import ceramic from "@public/tips/ceramic.jpg";
import wetwall from "@public/tips/newwet.jpg";
import Image from "next/image";

function page() {
  return (
    <main className="max-w-[70rem] mx-auto p-2">
      <h1 className="text-3xl font-bold py-3">How to & Tips</h1>
      <p className="text-gray-500 font-semibold mb-4">
        Discover expert tips and step-by-step guides to achieve flawless
        painting results for every project.
      </p>
      <section className="flex flex-col md:flex-row items-center md:gap-8 mb-8">
        <div className="flex-1">
          <Image
            alt="wet Wall Picture"
            src={ceramic}
            className="w-full rounded-lg"
          />
        </div>
        <div className="flex-1 text-end">
          <h2 className="text-2xl font-semibold my-3">
            كيفية ازالة السراميك بدون هدم
          </h2>

          <div className="text-gray-500 pr-5 mt-2">
            <div className="flex justify-end gap-2">
              <p>
                تنظيفه من الشحوم والزيوت القديمة والعالقة على السيراميك وذلك
                باستعمال ورق سنفرة
              </p>
              <b> .1</b>
            </div>
            <div className="flex justify-end gap-2">
              <p>وضع طبقتين من منتوج فيكساتور ليس</p>
              <b> .2</b>
            </div>
            <div className="flex justify-end gap-2">
              <p>تغطية الفواصل و الشقوق بواسطة معجون اندوي</p>
              <b> .3</b>
            </div>
            <div className="flex justify-end gap-2">
              <p>وضع الطبقة النهائية من دهان زيتي او مائي او حتى ديكوري</p>
              <b> .4</b>
            </div>
          </div>
          <p>وهكذا قد تم تغطية السيراميك او الزليج دون هدمه</p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center md:gap-8">
        <div className="flex-1 text-end">
          <h2 className="text-2xl font-semibold my-3">
            كيفية معالجة الرطوبة في الجدران؟
          </h2>
          <p className="mb-1">
            إحدى أهم المشاكل المؤرقة التي تواجه سكان العقارات إقامتهم بها أو عند
            صباغتها وتجهيزها للإقامة هي رطوبة الجدران. ورطوبة الجدران تؤدي
            لمشاكل كثيرة، حيث لها تأثيرات على منظر الحائط والشكل العام للمنزل
            وتؤثر أيضًا على صحة الإنسان بالسلب
          </p>
          <p>:ولرطوبة الجدران أسباب متعددة منها</p>
          <div className="text-gray-500 pr-5 mt-2">
            <div className="flex justify-end gap-2">
              <p>الرطوبة الموجودة في الجو</p>
              <b> .1</b>
            </div>
            <div className="flex justify-end gap-2">
              <p>الرطوبة الممتصة من الأرض عن طريق الجدران</p>
              <b> .2</b>
            </div>
            <div className="flex justify-end gap-2">
              <p>
                تلف مواسير المياه أو الصرف بالمباني وتسرب المياه إلى الأرضيات
                والجدران
              </p>
              <b> .3</b>
            </div>
            <div className="flex justify-end gap-2">
              <p>عدم تهوية المنزل بشكل جيد خصوصًا في فصل الشتاء</p>
              <b> .4</b>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <Image
            alt="wet Wall Picture"
            src={wetwall}
            className="w-full rounded-lg my-4"
          />
        </div>
      </section>
      <div className="md:w-1/2 text-end ml-auto p-4">
        <p className="my-2">
          ومن الضروري القضاء على آثار التعفن الناتجة عن تسرب الرطوبة إلى الجدران
          لما تسببه من أمراض خطيرة منها أمراض الحساسية والجهاز التنفسي
        </p>
        <p>طريقة علاج مشكل الرطوبة؟</p>

        <div className="text-gray-500 pr-5 mt-2">
          <div className="flex justify-end gap-2">
            <p>يجب تنظيف الحائط من الاوساخ والغبار</p>
            <b> .1</b>
          </div>
          <div className="flex justify-end gap-2">
            <p>تقشیر و کشط طبقة الدهان المتضررة من الرطوبة</p>
            <b> .2</b>
          </div>
          <div className="flex justify-end gap-2">
            <p>
              وضع طبقتين من منتوج ايتونش بلوس و تخفیف الطبقة الاولي ب %5% من
              الماء
            </p>
            <b> .3</b>
          </div>
        </div>
      </div>

      <section className="flex flex-col md:flex-row items-center md:gap-8 mt-8">
        <div className="flex-1">
          <Image
            alt="wet Wall Picture"
            src={dust}
            className="w-full rounded-lg"
          />
        </div>
        <div className="flex-1 text-end">
          <h2 className="text-2xl font-semibold my-3">
            مشكل عدم استقرار الالوان و التصاق الغبار في الواجهات
          </h2>
          <p className="mb-1">
            اوبيرا فصاد هو المنتوج المثالي لدهن وحماية الواجهات بتكنولوجية
            سيلكزان
          </p>
          <p className="font-semibold text-lg">غرض الاستعمال</p>

          <p className="my-2">
            يطبق على الواجهات المعرضة لظروف مناخية قاسية للغاية كالأمطار
            الغزيرة, الشمس, الكثيفة والمناخات البحرية يمكن استخدامها على واجهات
            جديدة او قديمة ناعمة او منتظمة
          </p>

          <p className="font-semibold text-lg">الخصائص</p>

          <div className="text-gray-500 pr-5 mt-2">
            <div className="flex justify-end gap-2">
              <p>متانة عالية</p>
              <b> .1</b>
            </div>
            <div className="flex justify-end gap-2">
              <p>التصاق ممتاز دون التعرض لخطر الانفصال</p>
              <b> .2</b>
            </div>
            <div className="flex justify-end gap-2">
              <p>مقاومة عالية للأمطار الغزيرة والطقس السيئ</p>
              <b> .3</b>
            </div>
            <div className="flex justify-end gap-2">
              <p>مقاومة عالية للأشعة فوق البنفسجية</p>
              <b> .4</b>
            </div>
            <div className="flex justify-end gap-2">
              <p>استقرار الألوان مع مرور الوقت</p>
              <b> .5</b>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
