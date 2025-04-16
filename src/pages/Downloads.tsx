
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";

// Sample documents data - in a real app, this would come from a CMS or API
const documents = [
  {
    id: 1,
    title: "Product Catalogue - Mining Equipment",
    description: "Complete specifications and details for our mining equipment range, including pumps, crushers, and conveyor systems.",
    category: "Product Catalogues",
    fileSize: "4.2 MB",
    lastUpdated: "January 2025"
  },
  {
    id: 2,
    title: "Product Catalogue - Construction Machinery",
    description: "Detailed information about loaders, cranes, excavators, and other construction machinery available through Greenrock Minerals.",
    category: "Product Catalogues",
    fileSize: "5.1 MB",
    lastUpdated: "February 2025"
  },
  {
    id: 3,
    title: "Material Test Certificate - High-Strength Steel",
    description: "Certification documents for high-strength steel components used in our equipment manufacturing process.",
    category: "Material Test Certificates",
    fileSize: "1.8 MB",
    lastUpdated: "March 2025"
  },
  {
    id: 4,
    title: "Material Test Certificate - Polyurethane Components",
    description: "Quality certification for polyurethane components used in mining and industrial applications.",
    category: "Material Test Certificates",
    fileSize: "2.3 MB",
    lastUpdated: "February 2025"
  },
  {
    id: 5,
    title: "Technical Datasheet - Industrial Pumps",
    description: "Technical specifications, performance curves, and application guides for our industrial pump range.",
    category: "Technical Datasheets",
    fileSize: "3.7 MB",
    lastUpdated: "March 2025"
  },
  {
    id: 6,
    title: "Technical Datasheet - Hydraulic Systems",
    description: "Detailed technical information about hydraulic systems, including pressure ratings, flow rates, and compatibility.",
    category: "Technical Datasheets",
    fileSize: "2.9 MB",
    lastUpdated: "January 2025"
  },
  {
    id: 7,
    title: "Repair & Service Procedure - Pump Maintenance",
    description: "Step-by-step guidelines for proper maintenance of industrial pumps to ensure optimal performance and longevity.",
    category: "Repair & Service Procedures",
    fileSize: "3.2 MB",
    lastUpdated: "February 2025"
  },
  {
    id: 8,
    title: "Repair & Service Procedure - Acid-Proofing",
    description: "Detailed procedures for acid-proofing applications and maintenance in harsh chemical environments.",
    category: "Repair & Service Procedures",
    fileSize: "2.5 MB",
    lastUpdated: "March 2025"
  }
];

// Group documents by category
const groupedDocuments = documents.reduce((acc, document) => {
  if (!acc[document.category]) {
    acc[document.category] = [];
  }
  acc[document.category].push(document);
  return acc;
}, {} as Record<string, typeof documents>);

export default function Downloads() {
  return (
    <div className="py-16 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">Downloads</h1>
          <p className="text-lg text-stone-600">
            Access our technical documentation, product catalogues, and service procedures. 
            All documents are available in PDF format for easy downloading and printing.
          </p>
        </div>

        {/* Document Categories */}
        {Object.entries(groupedDocuments).map(([category, docs]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-6 border-b border-stone-200 pb-2">
              {category}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {docs.map(doc => (
                <Card key={doc.id} className="bg-white">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-start gap-3">
                      <FileText className="h-6 w-6 text-greenrock-600 flex-shrink-0 mt-1" />
                      <span>{doc.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-stone-600">
                      {doc.description}
                    </CardDescription>
                    <div className="flex items-center justify-between mt-4 text-sm text-stone-500">
                      <span>Size: {doc.fileSize}</span>
                      <span>Updated: {doc.lastUpdated}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-greenrock-600 hover:bg-greenrock-700">
                      <Download className="mr-2 h-4 w-4" /> Download PDF
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
