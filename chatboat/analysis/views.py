from rest_framework.decorators import api_view
from rest_framework.response import Response
import pandas as pd

@api_view(['GET'])
def analyze_area(request):
    area = request.GET.get('area')
    df = pd.read_excel('analysis/data/realestate.xlsx')
    filtered = df[df['final location'].str.lower() == area.lower()]

    if filtered.empty:
        return Response({"message": "No data found"}, status=404)

    summary = f"{area} had {len(filtered)} entries with avg price {filtered['flat - weighted average rate'].mean():.2f}"
    years = filtered['year'].tolist()
    prices = filtered['flat - weighted average rate'].tolist()

    return Response({
        "summary": summary,
        "chart_data": {
            "labels": years,
            "prices": prices
        },
        "table_data": filtered.to_dict(orient='records')
    })
